"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SuccessPageProps {
  onComplete: () => void
}

export default function SuccessPage({ onComplete }: SuccessPageProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center min-h-96">
      {/* Certificate Icon */}
      <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center mb-8">
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold text-center mb-4">Congratulations!</h1>
      <p className="text-lg text-gray-600 text-center mb-8">You have successfully New Listing.</p>

      <Link href="./dashboard/seller">
      <Button
        onClick={onComplete}
        className="w-full max-w-xs h-12 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base rounded-lg"
      >
        Done
      </Button>
      </Link>
    </div>
  )
}
