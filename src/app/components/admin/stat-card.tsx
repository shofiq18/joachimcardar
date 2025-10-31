import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
  iconColor: string
}

export function StatCard({ title, value, change, icon: Icon, color, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#636F85] text-base font-medium">{title}</p>
          <p className="text-2xl font-bold text-[#2D2D2D] mt-2">{value}</p>
          <p className="text-green-600 text-sm mt-2">{change} from last month</p>
        </div>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  )
}
