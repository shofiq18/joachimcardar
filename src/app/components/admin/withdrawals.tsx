// "use client"

// import { useState } from "react"
// import { Search, Filter, RefreshCw, X, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface WithdrawalRequest {
//   id: string
//   bankName: string
//   amount: number
//   requestDate: string
//   requestTime: string
//   status: "Approved" | "Pending" | "Rejected"
//   fullName: string
//   bankNumber: string
// }

// const mockWithdrawals: WithdrawalRequest[] = [
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Pending",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Pending",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
//   {
//     id: "#WI2345",
//     bankName: "Alrajhi Bank",
//     amount: 25000,
//     requestDate: "2025-09-28",
//     requestTime: "10:00 AM",
//     status: "Approved",
//     fullName: "Muath Alwahibee",
//     bankNumber: "SA0055050282949482729300",
//   },
// ]

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "Approved":
//       return "bg-green-100 text-green-700"
//     case "Pending":
//       return "bg-yellow-100 text-yellow-700"
//     case "Rejected":
//       return "bg-red-100 text-red-700"
//     default:
//       return "bg-gray-100 text-gray-700"
//   }
// }

// export default function PayoutsPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedRequest, setSelectedRequest] = useState<WithdrawalRequest | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)

//   const filteredRequests = mockWithdrawals.filter(
//     (req) =>
//       req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       req.bankName.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const itemsPerPage = 8
//   const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)
//   const paginatedRequests = filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className=" mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold text-[#2D2D2D]">Transactions & Payments</h1>
//           <p className="text-[#636F85] text-base  mt-4">Monitor all payment transactions and revenue</p>
//         </div>

//         {/* Stat Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
//             <p className="text-gray-600 text-base">Total Transferred Money</p>
//             <p className="text-3xl font-bold text-[#2D2D2D] mt-2">$202K</p>
//           </div>

//           <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
//             <p className="text-gray-600 text-base">Payout Requests</p>
//             <p className="text-3xl font-bold text-[#2D2D2D] mt-2">150</p>
//           </div>
//         </div>

//         {/* Withdrawal Requests Table */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-6 border-b border-gray-200">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-4">
//                 <h2 className="text-lg font-semibold text-gray-900">Withdrawal Requests</h2>
//                 <button className="text-teal-600 text-sm font-medium hover:text-teal-700">Request</button>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>

//               <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
//                 <Filter className="w-4 h-4" />
//                 Filter
//               </Button>

//               <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
//                 <RefreshCw className="w-4 h-4" />
//                 Refresh
//               </Button>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200 bg-gray-50">
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bank Name</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Requests Date</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
//                   <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedRequests.map((req, idx) => (
//                   <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
//                     <td className="px-6 py-4 text-sm font-medium text-gray-900">{req.id}</td>
//                     <td className="px-6 py-4 text-sm text-gray-900">{req.bankName}</td>
//                     <td className="px-6 py-4 text-sm text-gray-900">${req.amount.toLocaleString()}/=</td>
//                     <td className="px-6 py-4 text-sm text-gray-900">
//                       <div>{req.requestDate}</div>
//                       <div className="text-gray-500">{req.requestTime}</div>
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <span className={`px-3 py-1 rounded-sm text-xs font-medium ${getStatusColor(req.status)}`}>
//                         {req.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => setSelectedRequest(req)}
//                           className="text-red-600 hover:text-red-700 font-medium bg-red-100 px-3 py-1 rounded-sm text-xs"
//                         >
//                           Reject
//                         </button>
//                         <button className="text-green-600 hover:text-green-700 font-medium bg-green-100 px-3 py-1 rounded-sm  text-xs">Accept</button>
//                         <button
//                           onClick={() => setSelectedRequest(req)}
//                           className="text-teal-600 hover:text-teal-700 font-medium bg-teal-100 px-3 py-1 rounded-sm  text-xs"
//                         >
//                           View Details
//                         </button>   
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between"></div>
//           <Button
//         variant="outline"
//         size="sm"
//         onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//         disabled={currentPage === 1}
//         className="gap-1"
//       >
//         <ChevronLeft className="h-4 w-4" />
//         Previous
//       </Button>

//       {/* Page Numbers (Show up to 5 pages, then ... last) */}
//       {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
//         const page = i + 1;
//         return (
//           <Button
//             key={page}
//             variant={currentPage === page ? "default" : "outline"}
//             size="sm"
//             onClick={() => setCurrentPage(page)}
//             className={currentPage === page ? "bg-teal-600 hover:bg-teal-700" : ""}
//           >
//             {page}
//           </Button>
//         );
//       })}

//       {/* Ellipsis + Last Page */}
//       {totalPages > 5 && (
//         <>
//           <span className="text-gray-500 px-2">...</span>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentPage(totalPages)}
//           >
//             {totalPages}
//           </Button>
//         </>
//       )}

//       {/* Next Button */}
//       <Button
//         variant="outline"
//         size="sm"
//         onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
//         disabled={currentPage === totalPages}
//         className="gap-1"
//       >
//         Next
//         <ChevronRight className="h-4 w-4" />
//       </Button>
//     </div>
//   </div>

//       {/* Withdrawal Details Modal */}
//       {selectedRequest && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl font-bold text-gray-900">Withdrawal Requests</h3>
//               <button onClick={() => setSelectedRequest(null)} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <p className="text-gray-600 text-sm">Withdraw</p>
//                 <p className="text-2xl font-bold text-gray-900">${selectedRequest.amount.toLocaleString()}</p>
//               </div>

//               <div>
//                 <p className="text-gray-600 text-sm">Request ID</p>
//                 <p className="text-lg font-semibold text-gray-900"># 856986579</p>
//               </div>

//               <div>
//                 <p className="text-gray-600 text-sm">Date</p>
//                 <p className="text-gray-900">{selectedRequest.requestDate}</p>
//               </div>

//               <div>
//                 <p className="text-gray-600 text-sm">Time</p>
//                 <p className="text-gray-900">{selectedRequest.requestTime} - 10:30 AM</p>
//               </div>

//               <div className="border-t border-gray-200 pt-4">
//                 <p className="text-gray-900 font-semibold mb-3">Bank Information :</p>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Full Name :</span>
//                     <span className="text-gray-900 font-medium">{selectedRequest.fullName}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Bank Name :</span>
//                     <span className="text-gray-900 font-medium">{selectedRequest.bankName}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Bank Number :</span>
//                     <span className="text-gray-900 font-medium">{selectedRequest.bankNumber}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { Search, Filter, RefreshCw, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WithdrawalRequest {
  id: string
  bankName: string
  amount: number
  requestDate: string
  requestTime: string
  status: "Approved" | "Pending" | "Rejected"
  fullName: string
  bankNumber: string
}

const mockWithdrawals: WithdrawalRequest[] = [
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Pending",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Pending",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
  {
    id: "#WI2345",
    bankName: "Alrajhi Bank",
    amount: 25000,
    requestDate: "2025-09-28",
    requestTime: "10:00 AM",
    status: "Approved",
    fullName: "Muath Alwahibee",
    bankNumber: "SA0055050282949482729300",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-700"
    case "Pending":
      return "bg-yellow-100 text-yellow-700"
    case "Rejected":
      return "bg-red-100 text-red-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function PayoutsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRequest, setSelectedRequest] = useState<WithdrawalRequest | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredRequests = mockWithdrawals.filter(
    (req) =>
      req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.bankName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const itemsPerPage = 8
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)
  const paginatedRequests = filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#2D2D2D]">Transactions & Payments</h1>
          <p className="text-[#636F85] text-base  mt-4">Monitor all payment transactions and revenue</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-base">Total Transferred Money</p>
            <p className="text-3xl font-bold text-[#2D2D2D] mt-2">$202K</p>
          </div>

          <div className="bg-white rounded-lg md:p-6 2xl:p-10 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-base">Payout Requests</p>
            <p className="text-3xl font-bold text-[#2D2D2D] mt-2">150</p>
          </div>
        </div>

        {/* Withdrawal Requests Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Withdrawal Requests</h2>
                <button className="text-teal-600 text-sm font-medium hover:text-teal-700">Request</button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                Filter
              </Button>

              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bank Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Requests Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRequests.map((req, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{req.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{req.bankName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${req.amount.toLocaleString()}/=</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>{req.requestDate}</div>
                      <div className="text-gray-500">{req.requestTime}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-sm text-xs font-medium ${getStatusColor(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="text-red-600 hover:text-red-700 font-medium bg-red-100 px-3 py-1 rounded-sm text-xs"
                        >
                          Reject
                        </button>
                        <button className="text-green-600 hover:text-green-700 font-medium bg-green-100 px-3 py-1 rounded-sm  text-xs">Accept</button>
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="text-teal-600 hover:text-teal-700 font-medium bg-teal-100 px-3 py-1 rounded-sm  text-xs"
                        >
                          View Details
                        </button>   
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty div to maintain structure — pagination moved below */}
          <div className="px-6 py-4 border-t border-gray-200"></div>
        </div>

        {/* PAGINATION — MOVED HERE, OUTSIDE THE TABLE */}
        <div className="mt-6  flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const page = i + 1
            return (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-teal-600 hover:bg-teal-700" : ""}
              >
                {page}
              </Button>
            )
          })}

          {totalPages > 5 && (
            <>
              <span className="text-gray-500 px-2">...</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Withdrawal Details Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Withdrawal Requests</h3>
                <button onClick={() => setSelectedRequest(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Withdraw</p>
                  <p className="text-2xl font-bold text-gray-900">${selectedRequest.amount.toLocaleString()}</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm">Request ID</p>
                  <p className="text-lg font-semibold text-gray-900"># 856986579</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm">Date</p>
                  <p className="text-gray-900">{selectedRequest.requestDate}</p>
                </div>

                <div>
                  <p className="text-gray-600 text-sm">Time</p>
                  <p className="text-gray-900">{selectedRequest.requestTime} - 10:30 AM</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-900 font-semibold mb-3">Bank Information :</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Full Name :</span>
                      <span className="text-gray-900 font-medium">{selectedRequest.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank Name :</span>
                      <span className="text-gray-900 font-medium">{selectedRequest.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank Number :</span>
                      <span className="text-gray-900 font-medium">{selectedRequest.bankNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}