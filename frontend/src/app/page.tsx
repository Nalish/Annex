import StatCard from "@/components/StatCard";
import SalesChart from "@/components/SalesChart";
import StockChart from "@/components/StockChart";
import TopProducts from "@/components/TopProducts";
export default function Home() {
  return (
    <main className="min-h-screen pt-7">
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-3">
          Annex Stock and Sales Management
        </h1>

      </div>
      <div className="flex gap-6 ">
        <StatCard
          title="Total Products"
          value="125"
        />
        <StatCard
          title="Total Stock"
          value="125"
        />
        <StatCard
          title="Today's Sales"
          value="125"
        />
        <StatCard
          title="Low Stock"
          value="125"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SalesChart />
        <StockChart />
      </div>
<div className="mt-6">
  <TopProducts />
</div>
    </main>
  );
}
