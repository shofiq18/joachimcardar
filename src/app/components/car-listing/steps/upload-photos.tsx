// "use client"

// import type React from "react"
// import { useState, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Camera, X } from "lucide-react"
// import Image from "next/image"

// interface UploadPhotosProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   data: any
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   onNext: (data: any) => void
//   onBack: () => void
// }

// export default function UploadPhotos({ data, onNext, onBack }: UploadPhotosProps) {
//   const [formData, setFormData] = useState({
//     photos: data.photos || Array(6).fill(null),
//     sellerName: data.sellerName || "",
//     phoneNumber: data.phoneNumber || "",
//     email: data.email || "",
//     sellerType: data.sellerType || "individual",
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [uploading, setUploading] = useState<boolean[]>(Array(6).fill(false))
//   const fileInputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null))

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}
//     if (!formData.sellerName.trim()) newErrors.sellerName = "Seller name is required"
//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required"
//     if (!formData.sellerType) newErrors.sellerType = "Seller type is required"
//     if (!formData.photos.some((photo: string | null) => photo !== null))
//       newErrors.photos = "At least one photo is required"
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (validateForm()) {
//       onNext(formData)
//     }
//   }

//   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0]
//       setUploading((prev) => {
//         const newUploading = [...prev]
//         newUploading[index] = true
//         return newUploading
//       })

//       try {
//         const formDataUpload = new FormData()
//         formDataUpload.append("image", file)

//         const response = await fetch(
//           `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
//           {
//             method: "POST",
//             body: formDataUpload,
//           }
//         )

//         const result = await response.json()
//         if (result.success) {
//           setFormData((prev) => {
//             const newPhotos = [...prev.photos]
//             newPhotos[index] = result.data.url
//             return { ...prev, photos: newPhotos }
//           })
//           setErrors((prev) => ({ ...prev, photos: "" }))
//         }
//       } catch (error) {
//         console.error("Upload failed:", error)
//         setErrors((prev) => ({ ...prev, photos: "Failed to upload photo" }))
//       } finally {
//         setUploading((prev) => {
//           const newUploading = [...prev]
//           newUploading[index] = false
//           return newUploading
//         })
//         if (fileInputRefs.current[index]) {
//           fileInputRefs.current[index]!.value = ""
//         }
//       }
//     }
//   }

//   const handleRemovePhoto = (index: number) => {
//     setFormData((prev) => {
//       const newPhotos = [...prev.photos]
//       newPhotos[index] = null
//       return { ...prev, photos: newPhotos }
//     })
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-8">
//       <h1 className="text-3xl font-bold mb-8">Upload Photos</h1>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Photo Grid */}
//         <div className="grid grid-cols-3 gap-4">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <div
//               key={i}
//               className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
//             >
//               {formData.photos[i] ? (
//                 <>
//                   <Image
//                     src={formData.photos[i]}
//                     alt={`Uploaded photo ${i + 1}`}
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => handleRemovePhoto(i)}
//                     className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     ref={(el) => { fileInputRefs.current[i] = el; }}
//                     onChange={(e) => handleFileUpload(e, i)}
//                     className="hidden"
//                     disabled={uploading[i]}
//                   />
//                   <div
//                     className="text-center"
//                     onClick={() => fileInputRefs.current[i]?.click()}
//                   >
//                     <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                     <p className="text-sm text-gray-500">
//                       {uploading[i] ? "Uploading..." : "Add Photo"}
//                     </p>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//         {errors.photos && <p className="text-red-500 text-sm mt-1">{errors.photos}</p>}

//         {/* Contact Information */}
//         <div className="space-y-6 pt-4 border-t">
//           <h2 className="text-2xl font-bold">Contact Information</h2>

//           <div>
//             <Label htmlFor="sellerName" className="text-base font-medium mb-2 block">
//               Seller Name
//             </Label>
//             <Input
//               id="sellerName"
//               placeholder="e.g. John Doe"
//               value={formData.sellerName}
//               onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
//               className="h-12 text-base"
//             />
//             {errors.sellerName && <p className="text-red-500 text-sm mt-1">{errors.sellerName}</p>}
//           </div>

//           <div>
//             <Label htmlFor="phoneNumber" className="text-base font-medium mb-2 block">
//               Phone Number
//             </Label>
//             <Input
//               id="phoneNumber"
//               placeholder="+1 (555) 123-4567"
//               value={formData.phoneNumber}
//               onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//               className="h-12 text-base"
//             />
//             {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//           </div>

//           <div>
//             <Label htmlFor="email" className="text-base font-medium mb-2 block">
//               Email Address (Optional)
//             </Label>
//             <Input
//               id="email"
//               placeholder="e.g. john.doe@example.com"
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="h-12 text-base"
//             />
//           </div>

//           <div className="space-y-3">
//             <Label className="text-base font-medium">Seller Type</Label>
//             <RadioGroup
//               value={formData.sellerType}
//               onValueChange={(value) => setFormData({ ...formData, sellerType: value as "individual" | "dealer" })}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 <label className="flex items-center justify-center h-12 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-teal-600 transition-colors">
//                   <RadioGroupItem value="individual" id="individual" className="sr-only" />
//                   <span className="font-medium text-teal-600">Individual</span>
//                 </label>
//                 <label className="flex items-center justify-center h-12 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-teal-600 transition-colors">
//                   <RadioGroupItem value="dealer" id="dealer" className="sr-only" />
//                   <span className="font-medium text-teal-600">Dealer</span>
//                 </label>
//               </div>
//             </RadioGroup>
//             {errors.sellerType && <p className="text-red-500 text-sm mt-1">{errors.sellerType}</p>}
//           </div>
//         </div>

//         <div className="flex gap-4 pt-4">
//           <Button
//             type="button"
//             onClick={onBack}
//             variant="outline"
//             className="flex-1 h-12 text-base font-semibold rounded-lg bg-transparent"
//           >
//             Back
//           </Button>
//           <Button
//             type="submit"
//             className="flex-1 h-12 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base rounded-lg"
//             disabled={uploading.some((status) => status)}
//           >
//             Preview Listing
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }

"use client";

import type React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Camera, X } from "lucide-react";

interface UploadPhotosProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function UploadPhotos({
  data,
  onNext,
  onBack,
}: UploadPhotosProps) {
  const [formData, setFormData] = useState({
    photos: data.photos || Array(6).fill(null),
    sellerName: data.sellerName || "",
    phoneNumber: data.phoneNumber || "",
    email: data.email || "",
    sellerType: data.sellerType || "individual",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<boolean[]>(Array(6).fill(false));
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(6).fill(null)
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.sellerName.trim())
      newErrors.sellerName = "Seller name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.sellerType) newErrors.sellerType = "Seller type is required";
    if (!formData.photos.some((photo: string | null) => photo !== null))
      newErrors.photos = "At least one photo is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
    console.log(formData);
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploading((prev) => {
        const newUploading = [...prev];
        newUploading[index] = true;
        return newUploading;
      });

      try {
        const formDataUpload = new FormData();
        formDataUpload.append("image", file);

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          {
            method: "POST",
            body: formDataUpload,
          }
        );

        const result = await response.json();
        if (result.success) {
          setFormData((prev) => {
            const newPhotos = [...prev.photos];
            newPhotos[index] = result.data.url;
            return { ...prev, photos: newPhotos };
          });
          setErrors((prev) => ({ ...prev, photos: "" }));
        }
      } catch (error) {
        console.error("Upload failed:", error);
        setErrors((prev) => ({ ...prev, photos: "Failed to upload photo" }));
      } finally {
        setUploading((prev) => {
          const newUploading = [...prev];
          newUploading[index] = false;
          return newUploading;
        });
        if (fileInputRefs.current[index]) {
          fileInputRefs.current[index]!.value = "";
        }
      }
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => {
      const newPhotos = [...prev.photos];
      newPhotos[index] = null;
      return { ...prev, photos: newPhotos };
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h1 className="text-3xl font-bold mb-8">Upload Photos</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
            >
              {formData.photos[i] ? (
                <>
                  <Image
                    src={formData.photos[i]}
                    alt={`Uploaded photo ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(i)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => {
                      fileInputRefs.current[i] = el;
                    }}
                    onChange={(e) => handleFileUpload(e, i)}
                    className="hidden"
                    disabled={uploading[i]}
                  />
                  <div
                    className="text-center"
                    onClick={() => fileInputRefs.current[i]?.click()}
                  >
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">
                      {uploading[i] ? "Uploading..." : "Add Photo"}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {errors.photos && (
          <p className="text-red-500 text-sm mt-1">{errors.photos}</p>
        )}

        {/* Contact Information */}
        <div className="space-y-6 pt-4 border-t">
          <h2 className="text-2xl font-bold">Contact Information</h2>

          <div>
            <Label
              htmlFor="sellerName"
              className="text-base font-medium mb-2 block"
            >
              Seller Name
            </Label>
            <Input
              id="sellerName"
              placeholder="e.g. John Doe"
              value={formData.sellerName}
              onChange={(e) =>
                setFormData({ ...formData, sellerName: e.target.value })
              }
              className="h-12 text-base"
            />
            {errors.sellerName && (
              <p className="text-red-500 text-sm mt-1">{errors.sellerName}</p>
            )}
          </div>

          <div>
            <Label
              htmlFor="phoneNumber"
              className="text-base font-medium mb-2 block"
            >
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              placeholder="+1 (555) 123-4567"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="h-12 text-base"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-base font-medium mb-2 block">
              Email Address (Optional)
            </Label>
            <Input
              id="email"
              placeholder="e.g. john.doe@example.com"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-base font-medium">Seller Type</Label>
            <RadioGroup
              value={formData.sellerType}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  sellerType: value as "individual" | "dealer",
                })
              }
            >
              <div className="grid grid-cols-2 gap-4">
                <label
                  className={`flex items-center justify-center h-12 border-2 border-gray-300 rounded-lg cursor-pointer transition-colors ${
                    formData.sellerType === "individual"
                      ? "bg-[#00695C] border-teal-600 text-white"
                      : "hover:border-teal-600"
                  }`}
                >
                  <RadioGroupItem
                    value="individual"
                    id="individual"
                    className="sr-only"
                  />
                  <span
                    className={`font-medium ${
                      formData.sellerType === "individual"
                        ? "text-white"
                        : "text-[#00695C]"
                    }`}
                  >
                    Individual
                  </span>
                </label>
                <label
                  className={`flex items-center justify-center h-12 border-2 border-gray-300 rounded-lg cursor-pointer transition-colors ${
                    formData.sellerType === "dealer"
                      ? "bg-[#00695C] border-teal-600 text-white"
                      : "hover:border-teal-600"
                  }`}
                >
                  <RadioGroupItem
                    value="dealer"
                    id="dealer"
                    className="sr-only"
                  />
                  <span
                    className={`font-medium ${
                      formData.sellerType === "dealer"
                        ? "text-white"
                        : "text-[#00695C]"
                    }`}
                  >
                    Dealer
                  </span>
                </label>
              </div>
            </RadioGroup>
            {errors.sellerType && (
              <p className="text-red-500 text-sm mt-1">{errors.sellerType}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1 h-12 text-base font-semibold rounded-lg bg-transparent"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1 h-12 bg-[#00695C] hover:bg-teal-700 text-white font-semibold text-base rounded-lg"
            disabled={uploading.some((status) => status)}
          >
            Submit Listing
          </Button>
        </div>
      </form>
    </div>
  );
}
