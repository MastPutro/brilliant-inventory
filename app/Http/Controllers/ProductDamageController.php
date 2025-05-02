<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\ProductInDetail;
use App\Models\ProductDamage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductDamageController extends Controller
{
    public function index(Request $request)
    {
        $query = ProductDamage::with('product')->orderBy('date', 'desc');

        // Search by product name
        if ($request->search) {
            $query->whereHas('product', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%');
            });
        }

        // Filter by date range
        if ($request->from_date && $request->to_date) {
            $query->whereBetween('date', [$request->from_date, $request->to_date]);
        }

        $damages = $query->paginate(10)->withQueryString();

        return Inertia::render('ProductDamage/Index', [
            'damages' => $damages,
            'filters' => $request->only(['search', 'from_date', 'to_date']),
        ]);
    }

    public function getEntryDates($id)
    {
        $entryDates = ProductInDetail::where('product_id', $id)
            ->with('productIn')
            ->orderByDesc('id')
            ->get()
            ->pluck('productIn.date')
            ->unique()
            ->values();

        return response()->json($entryDates);
    }

    public function create()
    {
        $products = Product::select('id', 'name')->get();
        $entryDates = ProductInDetail::with('productIn:id,date')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'date' => $item->productIn->date ?? now()->toDateString(),
                ];
            })
            ->unique('date') // agar tidak dobel
            ->values();

        return Inertia::render('ProductDamage/Create', [
            'products' => $products,
            'entryDates' => $entryDates,
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'reason' => 'required|string|max:255',
            'date' => 'required|date',
            'entry_date' => 'required|date',
        ]);
        

        DB::transaction(function () use ($validated) {
            $product = Product::findOrFail($validated['product_id']);

            // Ambil tanggal masuk (entry_date) dari ProductIn
            $entryDate = ProductInDetail::where('product_id', $product->id)
                ->with('productIn') // pastikan relasi dibuat
                ->orderByDesc('id')
                ->first()?->productIn->date ?? now(); // fallback jika tidak ditemukan

            // Simpan data kerusakan
            ProductDamage::create([
                'product_id' => $product->id,
                'quantity' => $validated['quantity'],
                'reason' => $validated['reason'],
                'entry_date' => $entryDate,
                'date' => $validated['date'],
            ]);

            // Kurangi stok produk
            $product->decrement('stock', $validated['quantity']);
        });

        return redirect()->route('dashboard')->with('success', 'Data barang rusak berhasil ditambahkan.');
    }
    

}
