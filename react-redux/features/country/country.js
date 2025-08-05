import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem("token"); // You can use sessionStorage or other storage methods as well
};

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.eaconsultancy.info/api/v1/",

    // This will attach the token to every request that requires authorization
    prepareHeaders: (headers) => {
      const token = getAuthToken(); // Retrieve token from storage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Add token to headers if available
      }
      return headers;
    },
  }),
  tagTypes: ["country"],
  endpoints: (build) => ({
    createCountry: build.mutation({
      query: (data) => ({
        url: "/country/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["country"],
    }),

    deleteCountry: build.mutation({
      query: (id) => ({
        url: `/country/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["country"],
    }),

    updateCountry: build.mutation({
      query: ({ id, data }) => ({
        url: `/country/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["country"],
    }),

    getAllCountry: build.query({
      query: () => ({
        url: "country",
      }),
      providesTags: ["country"],
      refetchOnMountOrArgChange: true,
    }),

    getCountryDataById: build.query({
      query: (id) => ({
        url: `/country/${id}`,
      }),
      providesTags: ["country"],
      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

// Export hooks to use in your components
export const {
  useCreateCountryMutation,
  useGetAllCountryQuery,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
  useGetCountryDataByIdQuery,
} = countryApi;
