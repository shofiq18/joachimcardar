"use client"

import type React from "react"

import { useState } from "react"
import { Info, Eye, EyeOff } from "lucide-react"

interface PasswordFormState {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

interface PasswordVisibility {
  oldPassword: boolean
  newPassword: boolean
  confirmPassword: boolean
}

interface FormErrors {
  oldPassword?: string
  newPassword?: string
  confirmPassword?: string
}

export default function AccountSettingsPage() {
  const [formData, setFormData] = useState<PasswordFormState>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState<PasswordVisibility>({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  const validatePassword = (password: string): boolean => {
    const hasLetters = /[a-zA-Z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const isLongEnough = password.length >= 8
    return hasLetters && hasNumbers && isLongEnough
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setSuccessMessage("")
  }

  const togglePasswordVisibility = (field: keyof PasswordVisibility) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Old password is required"
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required"
    } else if (!validatePassword(formData.newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters with letters and numbers"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Password updated successfully")
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      setTimeout(() => setSuccessMessage(""), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-2xl font-semibold">Password</h1>
          <Info className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Success Message */}
          {successMessage && <div className="rounded-lg bg-green-50 p-4 text-green-700 text-sm">{successMessage}</div>}

          {/* Old Password */}
          <div>
            <label htmlFor="oldPassword" className="block text-base font-medium mb-3">
              Old Password
            </label>
            <div className="relative">
              <input
                id="oldPassword"
                name="oldPassword"
                type={showPassword.oldPassword ? "text" : "password"}
                placeholder="Input your old password"
                value={formData.oldPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.oldPassword ? "border-red-500 bg-red-50" : "border-border bg-background"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("oldPassword")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword.oldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.oldPassword && <p className="text-red-500 text-sm mt-2">{errors.oldPassword}</p>}
          </div>

          {/* New Password */}
          <div>
            <label htmlFor="newPassword" className="block text-base font-medium mb-3">
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                name="newPassword"
                type={showPassword.newPassword ? "text" : "password"}
                placeholder="Input your new password"
                value={formData.newPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.newPassword ? "border-red-500 bg-red-50" : "border-border bg-background"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword.newPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Min 8 Characters with a combination of letters and numbers
            </p>
            {errors.newPassword && <p className="text-red-500 text-sm mt-2">{errors.newPassword}</p>}
          </div>

          {/* Confirmation New Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-base font-medium mb-3">
              Confirmation New Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword.confirmPassword ? "text" : "password"}
                placeholder="confirmation your new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.confirmPassword ? "border-red-500 bg-red-50" : "border-border bg-background"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword.confirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>}
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-[#00695C] hover:bg-[#004D40] text-white font-medium rounded-lg transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
