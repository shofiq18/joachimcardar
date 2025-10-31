"use client";

import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function EarningsPage() {
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const [withdrawalForm, setWithdrawalForm] = useState({
    bankName: '',
    bankNumber: '',
    accountHolder: '',
    amount: ''
  });

  const transactions = [
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
  ];

  const historyTransactions = [
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
    { name: 'Nissan Altima 2020', txId: 'SGFU654564', amount: '$750.00', time: '08:51am 05/07/25' },
  ];

  const handleSubmitWithdrawal = () => {
    setShowWithdrawalModal(false);
    setShowDetailsModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        {/* Header with Request Withdrawal Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowWithdrawalModal(true)}
            className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
            style={{ backgroundColor: '#00695C' }}
          >
            Request Withdrawal
          </button>
        </div>

        {/* Earnings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">Current Earnings</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">$350.00</p>
            <p className="text-sm" style={{ color: '#00695C' }}>+12.5% from last month</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">All Time Earnings</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">$350.00</p>
            <p className="text-sm text-gray-500">Since Jan 2024</p>
          </div>
        </div>

        {/* Earnings Overview Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Earnings Overview</h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              Monthly
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Chart Area */}
          <div className="relative h-80">
            <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="40" y1="0" x2="800" y2="0" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="50" x2="800" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="100" x2="800" y2="100" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="150" x2="800" y2="150" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="200" x2="800" y2="200" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="250" x2="800" y2="250" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="40" y1="300" x2="800" y2="300" stroke="#e5e7eb" strokeWidth="1" />

              {/* Area fill */}
              <path
                d="M 40,150 L 100,140 L 160,130 L 220,120 L 280,110 L 340,90 L 400,80 L 460,100 L 520,60 L 580,80 L 640,90 L 700,110 L 760,130 L 760,300 L 40,300 Z"
                fill="#C5E1DD"
                opacity="0.5"
              />

              {/* Line */}
              <path
                d="M 40,150 L 100,140 L 160,130 L 220,120 L 280,110 L 340,90 L 400,80 L 460,100 L 520,60 L 580,80 L 640,90 L 700,110 L 760,130"
                fill="none"
                stroke="#00695C"
                strokeWidth="3"
              />

              {/* Active point at June */}
              <circle cx="400" cy="80" r="6" fill="#00695C" />
              
              {/* Vertical dashed line */}
              <line x1="400" y1="80" x2="400" y2="300" stroke="#00695C" strokeWidth="1" strokeDasharray="5,5" />
            </svg>

            {/* Tooltip */}
            <div className="absolute left-[45%] top-8 transform -translate-x-1/2 text-white rounded-lg px-4 py-2 shadow-lg" style={{ backgroundColor: '#00695C' }}>
              <p className="text-xs mb-1">June 2024</p>
              <p className="text-sm font-bold">Revenue - $38,600</p>
            </div>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pb-4">
              <span>1,800</span>
              <span>1,600</span>
              <span>1,400</span>
              <span>1,200</span>
              <span>1,000</span>
              <span>800</span>
              <span>600</span>
              <span>400</span>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-10 right-0 flex justify-between text-xs text-gray-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span className="font-semibold" style={{ color: '#00695C' }}>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <button
              onClick={() => setShowHistoryModal(true)}
              className="text-sm border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
              style={{ color: '#00695C' }}
            >
              Transactions History
            </button>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">TrxID : {transaction.txId}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{transaction.amount}</p>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Withdrawal Request Modal */}
      {showWithdrawalModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowWithdrawalModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Withdrawal Request</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Bank Name</label>
                <input
                  type="text"
                  placeholder="Type Bank Name"
                  value={withdrawalForm.bankName}
                  onChange={(e) => setWithdrawalForm({ ...withdrawalForm, bankName: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Bank Number</label>
                <input
                  type="text"
                  placeholder="Type Bank Number"
                  value={withdrawalForm.bankNumber}
                  onChange={(e) => setWithdrawalForm({ ...withdrawalForm, bankNumber: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Account Holder Name</label>
                  <input
                    type="text"
                    placeholder="Type Account Holder ..."
                    value={withdrawalForm.accountHolder}
                    onChange={(e) => setWithdrawalForm({ ...withdrawalForm, accountHolder: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Amount to Withdraw</label>
                  <input
                    type="text"
                    placeholder="$5,252"
                    value={withdrawalForm.amount}
                    onChange={(e) => setWithdrawalForm({ ...withdrawalForm, amount: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setSaveInfo(!saveInfo)}
                  className="w-5 h-5 rounded flex items-center justify-center border-2 transition"
                  style={{
                    borderColor: saveInfo ? '#00695C' : '#d1d5db',
                    backgroundColor: saveInfo ? '#00695C' : 'white'
                  }}
                >
                  {saveInfo && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className="text-sm text-gray-700">Save information for future use.</span>
              </div>

              <button
                onClick={handleSubmitWithdrawal}
                className="w-full text-white py-3 rounded-lg hover:opacity-90 transition font-medium mt-6"
                style={{ backgroundColor: '#00695C' }}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdrawal Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
              </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Withdrawal Details</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Request ID Number</span>
                    <span className="text-gray-900 font-medium">123456789</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="text-gray-900 font-medium">Thu, 20 May 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time</span>
                    <span className="text-gray-900 font-medium">09:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount</span>
                    <span className="text-gray-900 font-medium">$120</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">To Beneficiary Account</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank Name</span>
                    <span className="text-gray-900 font-medium">Eastern Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IBAN Number</span>
                    <span className="text-gray-900 font-medium">Thu, 20 May 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Holder Name</span>
                    <span className="text-gray-900 font-medium">09:00pm</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowDetailsModal(false)}
                className="w-full text-white py-3 rounded-lg hover:opacity-90 transition font-medium"
                style={{ backgroundColor: '#00695C' }}
              >
                Go To Home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdrawal History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowHistoryModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Withdrawal History</h2>

            <div className="space-y-4">
              {historyTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">TrxID : {transaction.txId}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{transaction.amount}</p>
                    <p className="text-sm text-gray-500">{transaction.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


