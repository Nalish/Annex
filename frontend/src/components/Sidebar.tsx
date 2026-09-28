import React from 'react'
import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className='w-64 min-h-screen border-r bg-white p-6'>
            <h1 className="text-2xl font-bold text-blue-700">Annex</h1>

            <nav className='mt-8'>
                <ul className="space-y-2">
                    <li className='text-black'><Link href="/" className='block rounded-lg px-4 py-2 hover:bg-blue-100'>Dashboard</Link></li>
                    <li className='text-black'><Link href="/products" className='block rounded-lg px-4 py-2 hover:bg-blue-100'>Products</Link></li>
                    <li className='text-black'><Link href="/stock" className='block rounded-lg px-4 py-2 hover:bg-blue-100'>Stock</Link></li>
                    <li className='text-black'><Link href="/sales" className='block rounded-lg px-4 py-2 hover:bg-blue-100'>Sales</Link></li>
                    <li className='text-black'><Link href="/receipts"className='block rounded-lg px-4 py-2 hover:bg-blue-100'>Receipts</Link> </li>
                </ul>
            </nav>
        </aside>
    )
}

