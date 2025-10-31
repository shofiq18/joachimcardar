"use client"

import { useState } from "react"
import { Info } from "lucide-react"

interface NotificationPreferences {
  messagesLeads: boolean
  listings: boolean
  transactionsPayments: boolean
  systemUpdates: boolean
  push: boolean
  email: boolean
}

export default function NotificationPreferencesPage() {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    messagesLeads: true,
    listings: true,
    transactionsPayments: true,
    systemUpdates: false,
    push: true,
    email: true,
  })

  const togglePreference = (key: keyof NotificationPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="">
        {/* Notification Types Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg font-semibold">Notification</h2>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="space-y-6 bg-card rounded-lg p-6 border border-border">
            {/* Messages & Leads */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Messages & Leads</h3>
                <p className="text-sm text-muted-foreground mt-1">New buyer messages, lead inquiries.</p>
              </div>
              <button
                onClick={() => togglePreference("messagesLeads")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.messagesLeads ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.messagesLeads}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.messagesLeads ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Listings */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Listings</h3>
                <p className="text-sm text-muted-foreground mt-1">Approvals, expirations, price drops.</p>
              </div>
              <button
                onClick={() => togglePreference("listings")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.listings ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.listings}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.listings ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Transactions & Payments */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Transactions & Payments</h3>
                <p className="text-sm text-muted-foreground mt-1">Payments, confirmations, alerts.</p>
              </div>
              <button
                onClick={() => togglePreference("transactionsPayments")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.transactionsPayments ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.transactionsPayments}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.transactionsPayments ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* System & Updates */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">System & Updates</h3>
                <p className="text-sm text-muted-foreground mt-1">Account, app updates, promotions.</p>
              </div>
              <button
                onClick={() => togglePreference("systemUpdates")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.systemUpdates ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.systemUpdates}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.systemUpdates ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notification Channels Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg font-semibold">Notification Channels</h2>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="space-y-6 bg-card rounded-lg p-6 border border-border">
            {/* Push */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Push</h3>
              </div>
              <button
                onClick={() => togglePreference("push")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.push ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.push}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.push ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Email</h3>
              </div>
              <button
                onClick={() => togglePreference("email")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4 flex-shrink-0 ${
                  preferences.email ? "bg-[#00695C]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={preferences.email}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    preferences.email ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
