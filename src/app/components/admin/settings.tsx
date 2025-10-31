"use client";
import React, { useState } from 'react';
import { Globe, DollarSign, Bell, Shield, ChevronDown } from 'lucide-react';

export default function SettingsPage() {
  type Settings = {
    platformName: string;
    supportEmail: string;
    defaultCurrency: string;
    defaultLanguage: string;
    maintenanceMode: boolean;
    newUserRegistration: boolean;
    autoApproveListings: boolean;
    taxRate: string;
    commissionRate: string;
    listingFee: string;
    featuredListingFee: string;
    enablePromotionalPricing: boolean;
    enableNegotiation: boolean;
    emailNotifications: boolean;
    pushNotifications: boolean;
    weeklyReports: boolean;
    emailVerification: boolean;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  type BooleanKey =
    | 'maintenanceMode'
    | 'newUserRegistration'
    | 'autoApproveListings'
    | 'enablePromotionalPricing'
    | 'enableNegotiation'
    | 'emailNotifications'
    | 'pushNotifications'
    | 'weeklyReports'
    | 'emailVerification';

  const [activeTab, setActiveTab] = useState<string>('general');
  const [settings, setSettings] = useState<Settings>({
    platformName: 'CarMarket',
    supportEmail: 'support@carmarket.com',
    defaultCurrency: 'USD - US Dollar',
    defaultLanguage: 'English',
    maintenanceMode: false,
    newUserRegistration: true,
    autoApproveListings: false,
    taxRate: '8',
    commissionRate: '5',
    listingFee: '0',
    featuredListingFee: '49.99',
    enablePromotionalPricing: true,
    enableNegotiation: true,
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    emailVerification: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState<boolean>(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState<boolean>(false);

  const currencies = [
    'USD - US Dollar',
    'EUR - Euro',
    'GBP - British Pound',
    'CAD - Canadian Dollar'
  ];

  const languages = ['English', 'Spanish', 'French', 'Chinese'];

  const handleToggle = (field: BooleanKey) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked as unknown) : value
    }));
  };

  const handleSave = (section: string) => {
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage platform settings and configurations</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { id: 'general', label: 'General' },
            { id: 'financial', label: 'Financial' },
            { id: 'notifications', label: 'Notifications' },
            { id: 'security', label: 'Security' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={activeTab === tab.id ? { backgroundColor: '#00695C' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* General Tab */}
        {activeTab === 'general' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Platform Settings</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    name="platformName"
                    value={settings.platformName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    name="supportEmail"
                    value={settings.supportEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Currency
                  </label>
                  <button
                    onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between text-left"
                  >
                    <span>{settings.defaultCurrency}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  {showCurrencyDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {currencies.map((currency) => (
                        <div
                          key={currency}
                          onClick={() => {
                            setSettings({ ...settings, defaultCurrency: currency });
                            setShowCurrencyDropdown(false);
                          }}
                          className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        >
                          <span>{currency}</span>
                          {settings.defaultCurrency === currency && (
                            <span className="text-teal-600">✓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Language
                  </label>
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center justify-between text-left"
                  >
                    <span>{settings.defaultLanguage}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </button>
                  {showLanguageDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {languages.map((language) => (
                        <div
                          key={language}
                          onClick={() => {
                            setSettings({ ...settings, defaultLanguage: language });
                            setShowLanguageDropdown(false);
                          }}
                          className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                        >
                          <span>{language}</span>
                          {settings.defaultLanguage === language && (
                            <span className="text-teal-600">✓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Maintenance Mode</p>
                    <p className="text-sm text-gray-500">Temporarily disable the platform for maintenance</p>
                  </div>
                  <button
                    onClick={() => handleToggle('maintenanceMode')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.maintenanceMode ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.maintenanceMode ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">New User Registration</p>
                    <p className="text-sm text-gray-500">Allow new users to register</p>
                  </div>
                  <button
                    onClick={() => handleToggle('newUserRegistration')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.newUserRegistration ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.newUserRegistration ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Auto-Approve Listings</p>
                    <p className="text-sm text-gray-500">Automatically approve new car listings</p>
                  </div>
                  <button
                    onClick={() => handleToggle('autoApproveListings')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.autoApproveListings ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.autoApproveListings ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleSave('General')}
                className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                style={{ backgroundColor: '#00695C' }}
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Financial Tab */}
        {activeTab === 'financial' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Commission & Fees</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    name="taxRate"
                    value={settings.taxRate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Commission charged on each successful transaction</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    name="commissionRate"
                    value={settings.commissionRate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Commission charged on each successful transaction</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Listing Fee (Optional)
                  </label>
                  <input
                    type="number"
                    name="listingFee"
                    value={settings.listingFee}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">One-time fee to post a listing (0 for free)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Listing Fee
                  </label>
                  <input
                    type="number"
                    name="featuredListingFee"
                    value={settings.featuredListingFee}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Fee to promote a listing as featured</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Promotional Pricing</p>
                    <p className="text-sm text-gray-500">Allow sellers to run promotions and discounts</p>
                  </div>
                  <button
                    onClick={() => handleToggle('enablePromotionalPricing')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.enablePromotionalPricing ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.enablePromotionalPricing ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Negotiation</p>
                    <p className="text-sm text-gray-500">Allow buyers to negotiate prices with sellers</p>
                  </div>
                  <button
                    onClick={() => handleToggle('enableNegotiation')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.enableNegotiation ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.enableNegotiation ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleSave('Financial')}
                className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                style={{ backgroundColor: '#00695C' }}
              >
                Save Financial Settings
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative w-12 h-6 rounded-full transition`}
                  style={{ backgroundColor: settings.emailNotifications ? '#00695C' : '#d1d5db' }}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                      settings.emailNotifications ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive push notifications on mobile</p>
                </div>
                <button
                  onClick={() => handleToggle('pushNotifications')}
                  className={`relative w-12 h-6 rounded-full transition`}
                  style={{ backgroundColor: settings.pushNotifications ? '#00695C' : '#d1d5db' }}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                      settings.pushNotifications ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Weekly Reports</p>
                  <p className="text-sm text-gray-500">Receive weekly analytics reports</p>
                </div>
                <button
                  onClick={() => handleToggle('weeklyReports')}
                  className={`relative w-12 h-6 rounded-full transition`}
                  style={{ backgroundColor: settings.weeklyReports ? '#00695C' : '#d1d5db' }}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                      settings.weeklyReports ? 'translate-x-6' : ''
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={() => handleSave('Notification')}
                className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium mt-4"
                style={{ backgroundColor: '#00695C' }}
              >
                Save Notification Settings
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">Security & Privacy</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Email Verification</p>
                    <p className="text-sm text-gray-500">Require email verification for new accounts</p>
                  </div>
                  <button
                    onClick={() => handleToggle('emailVerification')}
                    className={`relative w-12 h-6 rounded-full transition`}
                    style={{ backgroundColor: settings.emailVerification ? '#00695C' : '#d1d5db' }}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                        settings.emailVerification ? 'translate-x-6' : ''
                      }`}
                    />
                  </button>
                </div>

                <button
                  onClick={() => handleSave('Security')}
                  className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                  style={{ backgroundColor: '#00695C' }}
                >
                  Save Security Settings
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Change Admin Password</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={settings.currentPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={settings.newPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={settings.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  onClick={() => handleSave('Password')}
                  className="text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                  style={{ backgroundColor: '#00695C' }}
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}