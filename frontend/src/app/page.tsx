
import StatCard from "@/components/StatCard";
import SalesChart from "@/components/SalesChart";
import StockChart from "@/components/StockChart";
import TopProducts from "@/components/TopProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-6 lg:p-8">

      {/* ================================
          Page Header
          ================================ */}
      <div className="mb-8 flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold text-carbon-slate md:text-3xl lg:text-4xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-muted md:text-base">
            Overview of your business performance
          </p>
        </div>
      </div>

      {/* ================================
          Statistics
          ================================ */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-carbon-slate">
            Business Overview
          </h2>

          <p className="text-sm text-muted">
            Key figures for your business
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

  <StatCard
    title="Total Products"
    value="125"
    description="Products in your catalogue"
    color="indigo"
  />

  <StatCard
    title="Total Stock"
    value="1,250"
    description="Items currently in stock"
    color="teal"
  />

  <StatCard
    title="Today's Sales"
    value="KES 25,500"
    description="Sales recorded today"
    color="indigo"
  />

  <StatCard
    title="Low Stock"
    value="8"
    description="Products need restocking"
    color="amber"
  />

</div>
      </section>

      {/* ================================
          Charts
          ================================ */}
      <section className="mt-8">

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-carbon-slate">
            Sales & Stock
          </h2>

          <p className="text-sm text-muted">
            Monitor your sales and inventory performance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SalesChart />
          <StockChart />
        </div>

      </section>

      {/* ================================
          Top Products
          ================================ */}
      <section className="mt-8">

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-carbon-slate">
            Top Products
          </h2>

          <p className="text-sm text-muted">
            Products generating the most sales
          </p>

        </div>

        <TopProducts />

      </section>

    </main>
  );
}
