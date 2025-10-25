import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SellerData {
  sellerId?: string;
  businessType: "individual" | "dealer";
  name?: string;
  businessName?: string;
  ownerName?: string;
  phone: string;
  email: string;
  location?: string;
}

interface SellerState {
  sellerData: SellerData | null;
  kycStatus: "pending" | "uploaded" | "verified" | "rejected" | null;
}

const initialState: SellerState = {
  sellerData: null,
  kycStatus: null,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSellerData: (state, action: PayloadAction<SellerData>) => {
      state.sellerData = action.payload;
    },
    setKycStatus: (state, action: PayloadAction<"pending" | "uploaded" | "verified" | "rejected">) => {
      state.kycStatus = action.payload;
    },
    clearSellerData: (state) => {
      state.sellerData = null;
      state.kycStatus = null;
    },
  },
});

export const { setSellerData, setKycStatus, clearSellerData } = sellerSlice.actions;
export default sellerSlice.reducer;