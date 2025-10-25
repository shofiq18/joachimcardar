import baseApi from "../baseApi";

type SellerRegistrationData = {
  businessType: "individual" | "dealer";
  name?: string;
  businessName?: string;
  ownerName?: string;
  phone: string;
  email: string;
  password: string;
  location?: string;
};

type SellerRegistrationResponse = {
  success: boolean;
  message?: string;
  sellerId: string;
  businessType: string;
};

type KYCUploadResponse = {
  success: boolean;
  message: string;
  documentId?: string;
  documentIds?: string[];
  verificationCode?: string;
};

type VerifyCodeRequest = {
  code: string;
  email: string;
  sellerId: string;
};

type VerifyCodeResponse = {
  success: boolean;
  message: string;
  data?: {
    verified: boolean;
  };
};

export const sellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerSeller: builder.mutation<SellerRegistrationResponse, SellerRegistrationData>({
      query: (body) => ({
        url: "/seller/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Seller"],
    }),
    uploadKYC: builder.mutation<KYCUploadResponse, FormData>({
      query: (formData) => ({
        url: "/seller/kyc/upload",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Seller"],
    }),
    verifyCode: builder.mutation<VerifyCodeResponse, VerifyCodeRequest>({
      query: (body) => ({
        url: "/seller/verify-code",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Seller"],
    }),
    resendVerificationCode: builder.mutation<{ success: boolean; message: string }, { email: string; sellerId: string }>({
      query: (body) => ({
        url: "/seller/resend-code",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterSellerMutation,
  useUploadKYCMutation,
  useVerifyCodeMutation,
  useResendVerificationCodeMutation,
} = sellerApi;