"use client";
import type{Product} from "./page"
import React, { useState,useEffect } from "react";
type AddProductModalProps = {
    setIsModalOpen: (value: boolean) => void;
    product:Product |null

}

export default function AddProductModal(props: AddProductModalProps) {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

useEffect(() =>{
    if(props.product){
        setName(props.product.name);
        setCategory(props.product.category);
        setDescription(props.product.description)
    }
},[props.product])

    return (
        <div className="fixed inset-0 flex items-center  justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                {/* modal header */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                        Add Product
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add a new product to your catalogue</p>
                </div>
                <form className="space-y-4">
                    {/* Product name */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Product Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Samsung Galaxy A15"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-electric-indigo focus:ring-2 focus:ring-electric-indigo/20 text-black"
                        />
                    </div>
                    {/* Category */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Category
                        </label>

                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="e.g. Phones"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-electric-indigo focus:ring-2 focus:ring-electric-indigo/20 text-black"
                        />
                    </div>
                    {/* Description */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 ">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe the product"
                            rows={3}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-electric-indigo focus:ring-2 focus:ring-electric-indigo/20 text-black"
                        />
                    </div>

                </form>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">

                    <button
                        type="button"
                        onClick={() => props.setIsModalOpen(false)}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium bg-amber-glow hover:opacity-60"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-electric-indigo px-4 py-2 text-sm font-medium text-white hover:opacity-60"
                    >
                        {props.product ? "Save Changes" : "Add Product"}
                      
                    </button>
                </div>
            </div>
        </div>
    );
}