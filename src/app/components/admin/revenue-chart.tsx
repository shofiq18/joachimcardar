// "use client"

// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const data = [
//   { month: "Jan", revenue: 45000 },
//   { month: "Feb", revenue: 52000 },
//   { month: "Mar", revenue: 48000 },
//   { month: "Apr", revenue: 61000 },
//   { month: "May", revenue: 55000 },
//   { month: "Jun", revenue: 38000 },
// ]

// export function RevenueChart() {
//   return (
//     <Card className="bg-white border-gray-200">
//       <CardHeader>
//         <CardTitle className="text-lg font-semibold">Revenue & Transactions</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
//                 <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//             <XAxis dataKey="month" stroke="#9ca3af" />
//             <YAxis  stroke="#9ca3af"  label={{ value: "$", position: "insideLeft" }} />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#fff",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "8px",
//               }}
//               formatter={(value) => `$${value.toLocaleString()}`}
//             />
//             <Area
//               type="monotone"
//               dataKey="revenue"
//               stroke="#0d9488"
//               strokeWidth={2}
//               fillOpacity={1}
//               fill="url(#colorRevenue)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   )
// }







"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: "Jan", revenue: 45000, transactions: 98 },
  { month: "Feb", revenue: 52000, transactions: 115 },
  { month: "Mar", revenue: 48000, transactions: 132 },
  { month: "Apr", revenue: 61000, transactions: 145 },
  { month: "May", revenue: 55000, transactions: 128 },
  { month: "Jun", revenue: 38000, transactions: 92 },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
        <p className="text-sm font-medium text-gray-900">{data.month}</p>
        <p className="text-sm text-gray-600">Revenue ($): ${data.revenue.toLocaleString()}</p>
        <p className="text-sm text-gray-600">Transactions: {data.transactions}</p>
      </div>
    )
  }
  return null
}

export function RevenueChart() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue & Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#0d9488", strokeDasharray: "5 5" }} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#0d9488"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
