import { baseApi } from "@/redux/api";

const productApiWithTag = baseApi.enhanceEndpoints({ addTagTypes: ['products'] });

const productApi = productApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (filterData) => ({
        url: `/products?${filterData}`,
        method: 'GET'
      }),
      providesTags: ['products']
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      }),
      providesTags: ['products']
    }),
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: '/products',
        method: 'POST',
        body: productInfo
      }),
      invalidatesTags: ['products']
    }),
    updateProduct: builder.mutation({
      query: ({ id, productInfo }) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: productInfo
      }),
      invalidatesTags: ['products']
    }),
  })
})

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation
} = productApi;
