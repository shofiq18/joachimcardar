import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 hidden lg:block">Welcome Back, John Doe!</h1>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">John Doe!</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
