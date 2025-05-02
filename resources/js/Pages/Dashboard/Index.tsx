import Alert from "@/Components/Alert";
import AreaChart from "@/Components/AreaChart";
import { Box, Archive, Unarchive } from "@/Components/Icons";
import AuthLayout from "@/Layouts/AuthLayout";
import { PageProps, TableHeader } from "@/types";
import { productIdFormat } from "@/utils/formats";

interface LowStockProduct {
    id: number;
    name: string;
    stock: number;
}

interface DashboardProps extends PageProps {
    currentyear: number;
    countitem: number;
    countin: number;
    countout: number;
    lowStockProducts: LowStockProduct[]; // <--- Tambahkan ini
}
interface ChartProps {
    earnings: number[];
    expenses: number[];
  }
  

  export default function Index({ auth, flash, ziggy, countitem, currentyear, countin, countout, earnings, expenses, lowStockProducts }: DashboardProps & ChartProps) {


    const tableHeader: TableHeader[] = [
        { name: "id", label: "ID", sortable: true },
        { name: "name", label: "Nama Barang", sortable: true },
        { name: "stock", label: "Stok", sortable: true },
    ];

    return (
        <AuthLayout user={auth.user}>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
                <Alert flash={flash} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center border-l-4 border-blue-500">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Stok Barang</h3>
                            <p className="text-2xl font-bold text-gray-800">{countitem}</p>
                        </div>
                        <Box className="w-10 h-10 text-gray-400" />
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center border-l-4 border-green-500">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Barang Masuk</h3>
                            <p className="text-2xl font-bold text-gray-800">{countin}</p>
                        </div>
                        <Archive className="w-10 h-10 text-gray-400" />
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center border-l-4 border-red-500">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Barang Keluar</h3>
                            <p className="text-2xl font-bold text-gray-800">{countout}</p>
                        </div>
                        <Unarchive className="w-10 h-10 text-gray-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Ringkasan Barang Tahun {currentyear}</h3>
                        <AreaChart auth={auth} flash={flash} ziggy={ziggy} earnings={earnings} expenses={expenses} />

                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Stok Hampir Habis</h3>
                        
                        {lowStockProducts.length === 0 ? (
                            <p className="text-gray-500">Tidak ada barang dengan stok rendah.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            {tableHeader.map((header) => (
                                                <th key={header.name} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {header.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {lowStockProducts.map((product) => (
                                            <tr key={product.id}>
                                                <td className="px-4 py-2">{productIdFormat(product.id)}</td>
                                                <td className="px-4 py-2">{product.name}</td>
                                                <td className="px-4 py-2">{product.stock}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </AuthLayout>
    );
}