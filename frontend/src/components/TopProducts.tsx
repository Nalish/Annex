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
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Top Products
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Best-selling products
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="pb-3">Product</th>
              <th className="pb-3">Category</th>
              <th className="pb-3 text-right">Units Sold</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className="border-b last:border-0"
              >
                <td className="py-4 font-medium text-gray-900">
                  {product.name}
                </td>

                <td className="py-4 text-gray-500">
                  {product.category}
                </td>

                <td className="py-4 text-right font-medium">
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