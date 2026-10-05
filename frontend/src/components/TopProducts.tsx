const products = [
  {
    name: "Samsung Galaxy A15",
    category: "Phones",
    unitsSold: 45,
  },
  {
    name: "Oraimo Charger",
    category: "Chargers",
    unitsSold: 38,
  },
  {
    name: "Type-C Cable",
    category: "Cables",
    unitsSold: 32,
  },
  {
    name: "Oraimo Earphones",
    category: "Earphones",
    unitsSold: 27,
  },
  {
    name: "iPhone 13 Case",
    category: "Cases",
    unitsSold: 21,
  },
];

export default function TopProducts() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-carbon-slate">
          Top Products
        </h2>

        <p className="mt-1 text-sm text-muted">
          Best-selling products
        </p>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-border text-sm text-muted">
              <th className="pb-3">Product</th>
              <th className="pb-3">Category</th>
              <th className="pb-3 text-right">Units Sold</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className="border-b border-border last:border-0"
              >
                <td className="py-4 font-medium text-carbon-slate">
                  {product.name}
                </td>

                <td className="py-4 text-muted">
                  {product.category}
                </td>

                <td className="py-4 text-right font-medium text-carbon-slate">
                  {product.unitsSold}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}