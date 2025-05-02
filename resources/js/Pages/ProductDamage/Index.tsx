import { Add } from "@/Components/Icons";
import AuthLayout from "@/Layouts/AuthLayout";
import { PageProps } from "@/types";
import { useForm, Link, router } from "@inertiajs/react";
import React from "react";

interface Damage {
    id: number;
    quantity: number;
    reason: string;
    date: string;
    entry_date: string;
    product: {
        name: string;
    };
}

interface Props extends PageProps {
    damages: {
        data: Damage[];
        links: any[];
    };
    filters: {
        search?: string;
        from_date?: string;
        to_date?: string;
    };
}

export default function Index({ auth, damages, filters }: Props) {
    const { data, setData, get } = useForm({
        search: filters.search || "",
        from_date: filters.from_date || "",
        to_date: filters.to_date || "",
    });

    const handleFilter = (e: React.FormEvent) => {
        e.preventDefault();
        get(route("product-damages.index"), { preserveState: true });
    };

    return (
        <AuthLayout user={auth.user}>
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Riwayat Barang Rusak</h2>

                <form onSubmit={handleFilter} className="flex flex-wrap items-end gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Cari nama barang"
                        className="border border-gray-300 rounded px-3 py-2"
                        value={data.search}
                        onChange={(e) => setData("search", e.target.value)}
                    />
                    <input
                        type="date"
                        className="border border-gray-300 rounded px-3 py-2"
                        value={data.from_date}
                        onChange={(e) => setData("from_date", e.target.value)}
                    />
                    <input
                        type="date"
                        className="border border-gray-300 rounded px-3 py-2"
                        value={data.to_date}
                        onChange={(e) => setData("to_date", e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Filter
                    </button>
                    <Link href={route('product-damages.create')} className="btn primary">
                        <Add className="w-5 h-5" />
                        Tambah
                    </Link>
                </form>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 border-b text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Nama Barang</th>
                                <th className="px-4 py-3">Jumlah Rusak</th>
                                <th className="px-4 py-3">Alasan</th>
                                <th className="px-4 py-3">Tanggal Masuk</th>
                                <th className="px-4 py-3">Tanggal Lapor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {damages.data.map((damage) => (
                                <tr key={damage.id} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-3">{damage.product.name}</td>
                                    <td className="px-4 py-3">{damage.quantity}</td>
                                    <td className="px-4 py-3">{damage.reason}</td>
                                    <td className="px-4 py-3">{damage.entry_date}</td>
                                    <td className="px-4 py-3">{damage.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthLayout>
    );
}
