"use client";

import { useState } from "react";
import { Upload, Info, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

/* -------------------------------------------------
   Mock logged-in user – replace with real auth data
   ------------------------------------------------- */
const defaultUserData = {
  type: "individual" as "individual" | "dealer",
  profileImage: null as File | null,
  fullName: "Muath Alwahibee",
  phone: "+966 50 123 4567",
  email: "muath@example.com",
  nationalId: null as File | null,               // <-- always present
  // Dealer-only
  businessName: "",
  ownerName: "",
  businessPhone: "",
  businessEmail: "",
  location: "",
  city: "",
  tradeLicense: null as File | null,
};

export default function AccountSettings() {
  const [businessType, setBusinessType] = useState<"individual" | "dealer">("individual");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(defaultUserData);

  /* ---------- Edit / Cancel / Update ---------- */
  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(defaultUserData);
  };
  const handleUpdate = () => {
    console.log("Updated:", formData);
    setIsEditing(false);
    alert("Profile updated!");
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "profileImage" | "nationalId" | "tradeLicense"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto">

        {/* ==== Header ==== */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-gray-900">Profile Information</h1>
            <Info className="h-5 w-5 text-gray-500" />
          </div>
          {!isEditing && (
            <Button onClick={handleEdit} variant="outline" size="sm" className="gap-1">
              <Pencil className="h-4 w-4" />
              Edit
            </Button>
          )}
        </div>

        {/* ==== Photo + Business Type ==== */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Photo */}
            <div className="flex flex-col items-center">
              <Label className="text-sm font-medium text-gray-700 mb-2">Photo Profile</Label>
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  {formData.profileImage ? (
                    <Image
                      src={URL.createObjectURL(formData.profileImage)}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer">
                    <Upload className="h-5 w-5 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, "profileImage")}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Business Type */}
            <div className="flex flex-col">
              <Label className="text-sm font-medium text-gray-700 mb-2">Business Type</Label>
              <div className="flex gap-2">
                <Button
                  variant={businessType === "individual" ? "default" : "outline"}
                  onClick={() => !isEditing && setBusinessType("individual")}
                  disabled={isEditing}
                  className={`rounded-md px-4 py-2 ${
                    businessType === "individual"
                      ? "bg-[#00695C] hover:bg-[#00695C]/90 text-white"
                      : "border-gray-300"
                  }`}
                >
                  Individual
                </Button>
                <Button
                  variant={businessType === "dealer" ? "default" : "outline"}
                  onClick={() => !isEditing && setBusinessType("dealer")}
                  disabled={isEditing}
                  className={`rounded-md px-4 py-2 ${
                    businessType === "dealer"
                      ? "bg-[#00695C] hover:bg-[#00695C]/90 text-white"
                      : "border-gray-300"
                  }`}
                >
                  Dealer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ==== Main Form ==== */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
            <Info className="h-4 w-4 text-gray-500" />
          </div>

          {/* ---- NATIONAL ID (always shown) ---- */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Upload className="h-4 w-4" />
              Upload National ID
            </Label>
            <div className="mt-2 border border-dashed border-gray-300 rounded-md p-6 text-center bg-gray-50">
              {formData.nationalId ? (
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={URL.createObjectURL(formData.nationalId)}
                    alt="National ID"
                    width={180}
                    height={120}
                    className="rounded border"
                  />
                  <p className="text-xs text-gray-600">{formData.nationalId.name}</p>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-xs text-gray-500 mb-1">
                    Please upload a clear photo of your NID
                  </p>
                </>
              )}

              {isEditing && (
                <>
                  <Button asChild variant="ghost" size="sm" className="text-teal-600">
                    <label htmlFor="national-id">Choose file</label>
                  </Button>
                  <input
                    id="national-id"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "nationalId")}
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>

          {/* ---- TRADE LICENSE (dealer only) ---- */}
          {businessType === "dealer" && (
            <div className="mb-6">
              <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Upload className="h-4 w-4" />
                Upload Trade License
              </Label>
              <div className="mt-2 border border-dashed border-gray-300 rounded-md p-6 text-center bg-gray-50">
                {formData.tradeLicense ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-gray-200 border rounded w-44 h-32 flex items-center justify-center">
                      <span className="text-xs text-gray-600">PDF / Image</span>
                    </div>
                    <p className="text-xs text-gray-600">{formData.tradeLicense.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-xs text-gray-500 mb-1">
                      Please upload your valid trade license
                    </p>
                  </>
                )}

                {isEditing && (
                  <>
                    <Button asChild variant="ghost" size="sm" className="text-teal-600">
                      <label htmlFor="trade-license">Choose file</label>
                    </Button>
                    <input
                      id="trade-license"
                      type="file"
                      accept=".pdf,.jpg,.png"
                      onChange={(e) => handleFileChange(e, "tradeLicense")}
                      className="hidden"
                    />
                  </>
                )}
              </div>
            </div>
          )}

          {/* ---- Form Fields ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* LEFT */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  {businessType === "dealer" ? "Name / Business Name" : "Full Name"}
                </Label>
                <Input
                  value={businessType === "dealer" ? formData.businessName : formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [businessType === "dealer" ? "businessName" : "fullName"]: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  placeholder={
                    businessType === "dealer" ? "Enter Business Name" : "Enter full name"
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">
                  {businessType === "dealer" ? "Business Phone Number" : "Phone Number"}
                </Label>
                <Input
                  value={businessType === "dealer" ? formData.businessPhone : formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [businessType === "dealer" ? "businessPhone" : "phone"]: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  placeholder="+966 50 123 4567"
                  className="mt-1"
                />
              </div>

              {businessType === "dealer" && (
                <div>
                  <Label className="text-sm font-medium text-gray-700">Location</Label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Enter location"
                    className="mt-1"
                  />
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {businessType === "dealer" && (
                <div>
                  <Label className="text-sm font-medium text-gray-700">Owner Name</Label>
                  <Input
                    value={formData.ownerName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, ownerName: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Enter owner's full name"
                    className="mt-1"
                  />
                </div>
              )}

              <div>
                <Label className="text-sm font-medium text-gray-700">
                  {businessType === "dealer" ? "Business Email" : "Email"}
                </Label>
                <Input
                  value={businessType === "dealer" ? formData.businessEmail : formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [businessType === "dealer" ? "businessEmail" : "email"]: e.target.value,
                    }))
                  }
                  disabled={!isEditing}
                  placeholder="Enter email"
                  className="mt-1"
                />
              </div>

              {businessType === "dealer" && (
                <div>
                  <Label className="text-sm font-medium text-gray-700">City</Label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="Enter city"
                    className="mt-1"
                  />
                </div>
              )}
            </div>
          </div>

          {/* ---- Action Buttons ---- */}
          {isEditing && (
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                onClick={handleUpdate}
                className="bg-[#00695C] hover:bg-[#00695C]/90 text-white"
              >
                Update
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}