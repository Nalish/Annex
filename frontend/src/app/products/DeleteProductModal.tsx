import React from "react";
import type { Product } from "./page";

type DeleteModalProps = {
  setIsDeleteModalOpen: (value: boolean) => void;
  product: Product | null;
};

export default function DeleteProductModal(props: DeleteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-xl font-bold text-gray-900">
          Delete Product
        </h2>

        <p className="mt-3 text-sm text-gray-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-900">
            {props.product?.name}
          </span>
          ?
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={() => props.setIsDeleteModalOpen(false)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            No
          </button>

          <button
            type="button"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
          >
            Yes, Delete
          </button>

        </div>

      </div>
    </div>
  );
}