"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-carbon-slate p-6">

      {/* Logo */}
      <div className="mb-10 ">
        <h1 className="text-2xl font-bold text-white">
          Annex
        </h1>

        <p className="mt-1 text-xs text-slate-300">
          Stock & Sales Management
        </p>
      </div>

      {/* Navigation */}
      <nav>
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        <ul className="space-y-2">

          <li>
            <Link
              href="/"
              className={`block rounded-lg  px-4 py-3 font-medium text-white transition ${pathname === "/"
                  ? "bg-electric-indigo text-white"
                  : "text-slate-2-- hover:bg-white/10 hover:text-white"
                }`}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link

              href="/products"
              className={`block rounded-lg  px-4 py-3 font-medium text-white transition ${pathname === "/products"
                  ? "bg-electric-indigo text-white"
                  : "text-slate-2-- hover:bg-white/10 hover:text-white"
                }`}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/stock"
              className={`block rounded-lg  px-4 py-3 font-medium text-white transition ${pathname === "/stock"
                  ? "bg-electric-indigo text-white"
                  : "text-slate-2-- hover:bg-white/10 hover:text-white"
                }`}
            >
              Stock
            </Link>
          </li>

          <li>
            <Link
              href="/sales"
             className={`block rounded-lg  px-4 py-3 font-medium text-white transition ${pathname === "/sales"
                  ? "bg-electric-indigo text-white"
                  : "text-slate-2-- hover:bg-white/10 hover:text-white"
                }`}
            >
              Sales
            </Link>
          </li>

          <li>
            <Link
              href="/receipts"
             className={`block rounded-lg  px-4 py-3 font-medium text-white transition ${pathname === "/receipts"
                  ? "bg-electric-indigo text-white"
                  : "text-slate-2-- hover:bg-white/10 hover:text-white"
                }`}
            >
              Receipts
            </Link>
          </li>

        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="px-4 text-xs text-slate-400">
          Annex Management System
        </p>
      </div>

    </aside>
  );
}