// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/auth";
import { bannerApi } from "../features/banner/banner";
import { aboutUsApi } from "../features/aboutUs/aboutUs";
import { featureApi } from "../features/feature/feature";
import { countryApi } from "../features/country/country";
import { requirementsApi } from "../features/requirements/requirements";
import { RequirementApi } from "../features/requirement/requirement";
import { CustomizeApi } from "../features/customize/customize";
import { FeedbackApi } from "../features/feedback/feedback";
import { contactApi } from "../features/contact/contact";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [aboutUsApi.reducerPath]: aboutUsApi.reducer,
    [featureApi.reducerPath]: featureApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [requirementsApi.reducerPath]: requirementsApi.reducer,
    [RequirementApi.reducerPath]: RequirementApi.reducer,
    [CustomizeApi.reducerPath]: CustomizeApi.reducer,
    [FeedbackApi.reducerPath]: FeedbackApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      bannerApi.middleware,
      aboutUsApi.middleware,
      featureApi.middleware,
      countryApi.middleware,
      requirementsApi.middleware,
      RequirementApi.middleware,
      CustomizeApi.middleware,
      FeedbackApi.middleware,
      contactApi.middleware
    ),
});

export default store;
