"use client"
import React, { useState } from 'react'
import AddProductModal from './AddProductModal'
import DeleteProductModal from './DeleteProductModal'


export type Product = {
  id: number
  name: string
  category: string
  description: string
}
const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy A15",
    category: "Phones",
    description: "Samsung smartphone with 128GB storage"
  },
  {
    id: 2,
    name: "Oraimo FreePods 4",
    category: "Earphones",
    description: "Wireless Bluetooth earphones"
  },
  {
    id: 3,
    name: "JBL Go 4",
    category: "Speakers",
    description: "Portable Bluetooth speaker"
  }
]

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct,setSelectedProduct]=useState<Product|null>(null)
  const[isDeleteModalOpen,setIsDeleteModalOpen]=useState(false)
  return (
    <main className='min-h-screen p-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Products</h1>
          <p>This is where we will manage our products</p></div>
        <div>
          <button
            className='rounded-lg bg-electric-indigo px-4 py-2'
            onClick={() => setIsModalOpen(true)}
          >+Add Product</button>
        </div>

      </div>
      <div className='mt-6'>
        <input
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-electric-indigo"
          type="text"
          placeholder='Search Products'
        />
      </div>

      <div className="mt-8 overflow-x-auto">
  <table className="w-full text-left">

    <thead>
      <tr className="bg-amber-glow/20">
        <th className="rounded-l-lg px-6 py-4 text-sm font-semibold">
          Product
        </th>

        <th className="px-6 py-4 text-sm font-semibold">
          Category
        </th>

        <th className="px-6 py-4 text-sm font-semibold">
          Description
        </th>

        <th className="rounded-r-lg px-6 py-4 text-sm font-semibold">
          Actions
        </th>
      </tr>
    </thead>

    <tbody>
      {products.map((product) => (
        <tr
          key={product.id}
          className="border-b border-border/40 transition hover:bg-gray-600"
        >
          <td className="px-6 py-5 font-medium">
            {product.name}
          </td>

          <td className="px-6 py-5">
            {product.category}
          </td>

          <td className="px-6 py-5 text-sm text-gray-600">
            {product.description}
          </td>

          <td className="px-6 py-5">
            <div className="flex gap-2">
              <button
              onClick={()=>{
                setSelectedProduct(product)
                setIsModalOpen(true)
              }}
                className="rounded-md bg-electric-indigo px-3 py-1.5 text-sm"
              >
                Edit
              </button>

              <button
                className="rounded-md bg-amber-glow px-3 py-1.5 text-sm"
                onClick={() =>{
                  setSelectedProduct(product)
                  setIsDeleteModalOpen(true)
                }}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>

      {isModalOpen && (
        <AddProductModal
          setIsModalOpen={setIsModalOpen} 
          product={selectedProduct}
          />
      )}
      {isDeleteModalOpen && (
        <DeleteProductModal 
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          product={selectedProduct}
        />

      )}

    </main>
  )
}
