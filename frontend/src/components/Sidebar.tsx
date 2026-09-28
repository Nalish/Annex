import React from 'react'
import Link from "next/link"

export default function Sidebar() {
    return (
        <aside className='w-64 min-h-screen border-r bg-white p-6'>
            <h1 className='text-2xl font-bold'>Annex</h1>

            <nav className='mt-8'>
                <ul className="space-y-2">
                    <li><Link href="/">Dashboard</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/stock">Stock</Link></li>
                    <li><Link href="/sales">Sales</Link></li>
                    <li><Link href="/receipts">Receipts</Link> </li>
                </ul>
            </nav>
        </aside>
    )
}

