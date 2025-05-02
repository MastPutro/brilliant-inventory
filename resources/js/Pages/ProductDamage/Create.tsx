import React, { useState, useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { router, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

interface Product {
  id: number;
  name: string;
}

interface EntryDateOption {
  id: number;
  date: string;
}

interface CreateProps extends PageProps {
  products: Product[];
  entryDates: EntryDateOption[];
}

export default function Create({ auth, products, entryDates }: CreateProps) {
  const { data, setData, post, processing, errors } = useForm({
    product_id: 0,
    quantity: 1,
    reason: "",
    entry_date: "",
    date: new Date().toISOString().split("T")[0], // default today
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("product-damages.store"));
  };

  return (
    <AuthLayout user={auth.user}>
      <Head title="Tambah Barang Rusak" />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Tambah Barang Rusak</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="product_id" className="block font-medium">
              Barang
            </label>
            <select
              id="product_id"
              value={data.product_id}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setData("product_id", parseInt(e.target.value))
              }
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Pilih Barang</option>
              {products.map((p: Product) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            {errors.product_id && (
              <p className="text-red-500 text-sm mt-1">{errors.product_id}</p>
            )}
          </div>

          <div>
            <label htmlFor="entry_date" className="block font-medium">
              Tanggal Masuk (Entry Date)
            </label>
            <select
              id="entry_date"
              value={data.entry_date}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setData("entry_date", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Pilih Tanggal Masuk</option>
              {entryDates.map((d: EntryDateOption) => (
                <option key={d.id} value={d.date}>
                  {d.date}
                </option>
              ))}
            </select>
            {errors.entry_date && (
              <p className="text-red-500 text-sm mt-1">{errors.entry_date}</p>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="block font-medium">
              Jumlah Rusak
            </label>
            <input
              type="number"
              id="quantity"
              value={data.quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData("quantity", parseInt(e.target.value))
              }
              min="1"
              className="w-full border rounded px-3 py-2"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
            )}
          </div>

          <div>
            <label htmlFor="reason" className="block font-medium">
              Alasan Kerusakan
            </label>
            <input
              type="text"
              id="reason"
              value={data.reason}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData("reason", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
            />
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block font-medium">
              Tanggal Dilaporkan
            </label>
            <input
              type="date"
              id="date"
              value={data.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData("date", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={processing}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
