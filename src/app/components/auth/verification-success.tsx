"use client"

interface VerificationSuccessProps {
  onContinue: () => void
}

export default function VerificationSuccess({ onContinue }: VerificationSuccessProps) {
  return (
    <div className="w-full">
      <div className="container  mx-auto border border-gray-50  ">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md bg-white rounded-md shadow-xl px-8 py-12 text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Account verified
              <br />
              Successfully
            </h1>

            <p className="text-gray-600 mb-12 text-lg">
              You have successfully
              <br />
              Sign up.
            </p>

            {/* Continue Button */}
            <button onClick={onContinue} className="w-full bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
