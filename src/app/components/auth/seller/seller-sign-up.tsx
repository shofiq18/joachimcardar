

"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

type BusinessType = "individual" | "dealer";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  businessName?: string;
  ownerName?: string;
  location?: string;
}

export default function SellerRegistration() {
  const [businessType, setBusinessType] = useState<BusinessType>("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
    businessName: false,
    ownerName: false,
    location: false,
    photo: false,
  });

  const validateName = (name: string): string | undefined => {
    if (businessType === "individual" && !name) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (businessType === "individual" && !phone)
      return "Phone number is required";
    const phoneRegex = /^[0-9+\s()-]{10,}$/;
    if (phone && !phoneRegex.test(phone)) return "Invalid phone number";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (businessType === "individual" && !email) return "Email is required";
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email && !emailRegex.test(email)) return "Invalid email address";
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (businessType === "individual" && !password)
      return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return undefined;
  };

  const validateBusinessName = (name: string): string | undefined => {
    if (businessType === "dealer" && !name) return "Business Name is required";
    if (name.length < 2) return "Business Name must be at least 2 characters";
    return undefined;
  };

  const validateOwnerName = (name: string): string | undefined => {
    if (businessType === "dealer" && !name) return "Owner Name is required";
    if (name.length < 2) return "Owner Name must be at least 2 characters";
    return undefined;
  };

  const validateLocation = (location: string): string | undefined => {
    if (businessType === "dealer" && !location) return "Location is required";
    return undefined;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const businessNameError = validateBusinessName(businessName);
    const ownerNameError = validateOwnerName(ownerName);
    const locationError = validateLocation(location);

    if (
      nameError ||
      phoneError ||
      emailError ||
      passwordError ||
      businessNameError ||
      ownerNameError ||
      locationError
    ) {
      setErrors({
        name: nameError,
        phone: phoneError,
        email: emailError,
        password: passwordError,
        businessName: businessNameError,
        ownerName: ownerNameError,
        location: locationError,
      });
      setTouched({
        name: true,
        phone: true,
        email: true,
        password: true,
        businessName: true,
        ownerName: true,
        location: true,
        photo: true,
      });
      return;
    }

    console.log("Form submitted:", {
      businessType,
      name,
      phone,
      email,
      password,
      businessName,
      ownerName,
      location,
    });
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-12">
        {/* Left Section - Illustration */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Your Seller
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Registration
          </h2>

          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/seller-registation.png"
              alt="seller-registaiton"
              className="w-full h-80 object-cover"
              width={600}
              height={400}
            />
          </div>

          <p className="text-gray-600 mt-8">
            Don&#39;t have an account?{" "}
            <a
              href="/sign-in"
              className="text-teal-700 font-semibold hover:text-teal-800"
            >
              Login
            </a>
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Type Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type
              </label>
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setBusinessType("individual")}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    businessType === "individual"
                      ? "bg-teal-700 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setBusinessType("dealer")}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    businessType === "dealer"
                      ? "bg-teal-700 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Dealer
                </button>
              </div>
            </div>

            {/* Name Field (for Individual) */}
            {businessType === "individual" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (touched.name) {
                      setErrors((prev) => ({
                        ...prev,
                        name: validateName(e.target.value),
                      }));
                    }
                  }}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, name: true }));
                    setErrors((prev) => ({
                      ...prev,
                      name: validateName(name),
                    }));
                  }}
                  placeholder="Enter your Name / Business Name"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            )}

            {/* Phone Number Field (for Individual) */}
            {businessType === "individual" && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (touched.phone) {
                      setErrors((prev) => ({
                        ...prev,
                        phone: validatePhone(e.target.value),
                      }));
                    }
                  }}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, phone: true }));
                    setErrors((prev) => ({
                      ...prev,
                      phone: validatePhone(phone),
                    }));
                  }}
                  placeholder="+880 1XXX-XXXXXX"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
                {touched.phone && errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Email Field (for Individual) */}
            {businessType === "individual" && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) {
                      setErrors((prev) => ({
                        ...prev,
                        email: validateEmail(e.target.value),
                      }));
                    }
                  }}
                  onBlur={() => {
                    setTouched((prev) => ({ ...prev, email: true }));
                    setErrors((prev) => ({
                      ...prev,
                      email: validateEmail(email),
                    }));
                  }}
                  placeholder="your.email@example.com"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            )}

            {/* Password Field (for Individual) */}
            {businessType === "individual" && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (touched.password) {
                        setErrors((prev) => ({
                          ...prev,
                          password: validatePassword(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, password: true }));
                      setErrors((prev) => ({
                        ...prev,
                        password: validatePassword(password),
                      }));
                    }}
                    placeholder="Create a strong password"
                    className="block w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            )}

            {/* Dealer Fields */}
            {businessType === "dealer" && (
              <>
                {/* Business Name Field */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (touched.businessName) {
                        setErrors((prev) => ({
                          ...prev,
                          businessName: validateBusinessName(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, businessName: true }));
                      setErrors((prev) => ({
                        ...prev,
                        businessName: validateBusinessName(businessName),
                      }));
                    }}
                    placeholder="Enter business name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  {touched.businessName && errors.businessName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                {/* Owner Name Field */}
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    value={ownerName}
                    onChange={(e) => {
                      setOwnerName(e.target.value);
                      if (touched.ownerName) {
                        setErrors((prev) => ({
                          ...prev,
                          ownerName: validateOwnerName(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, ownerName: true }));
                      setErrors((prev) => ({
                        ...prev,
                        ownerName: validateOwnerName(ownerName),
                      }));
                    }}
                    placeholder="Enter owner’s full name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  {touched.ownerName && errors.ownerName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.ownerName}
                    </p>
                  )}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (touched.phone) {
                        setErrors((prev) => ({
                          ...prev,
                          phone: validatePhone(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, phone: true }));
                      setErrors((prev) => ({
                        ...prev,
                        phone: validatePhone(phone),
                      }));
                    }}
                    placeholder="+880 1XXX-XXXXXX"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (touched.email) {
                        setErrors((prev) => ({
                          ...prev,
                          email: validateEmail(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, email: true }));
                      setErrors((prev) => ({
                        ...prev,
                        email: validateEmail(email),
                      }));
                    }}
                    placeholder="business@example.com"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (touched.password) {
                          setErrors((prev) => ({
                            ...prev,
                            password: validatePassword(e.target.value),
                          }));
                        }
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, password: true }));
                        setErrors((prev) => ({
                          ...prev,
                          password: validatePassword(password),
                        }));
                      }}
                      placeholder="Enter your Password"
                      className="block w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5 text-gray-400 hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-400 hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {touched.password && errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Location Field */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (touched.location) {
                        setErrors((prev) => ({
                          ...prev,
                          location: validateLocation(e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => {
                      setTouched((prev) => ({ ...prev, location: true }));
                      setErrors((prev) => ({
                        ...prev,
                        location: validateLocation(location),
                      }));
                    }}
                    placeholder="City / Location"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                  {touched.location && errors.location && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.location}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition mt-6"
            >
              Continue to Verification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
