type StatCardProps={
    title:string;
    value:string;
}


export default function StatCard({title,value}:StatCardProps) {
  return (
    <div className="flex-1 rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <p className="mt-2 text-3xl font-bold text-grey-900">{value}</p>
    </div>
  )
}
