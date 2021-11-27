import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react" 
 export const productsApi = createApi({
     reducerPath:"productsApi",
     baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
     endpoints:(builder) =>({
         getAllProducts:builder.query({
             query:() =>"products"
         }),
         getProductById:builder.query({
             query:(id) =>`products/${id}`
         }),
         getCategoryById:builder.query({
            query:(id) =>`products/category/${id}`
        }),
         

        
     })
 })

 export const {useGetAllProductsQuery,useGetProductByIdQuery,useGetCategoryByIdQuery} =productsApi

//  function getProductAPI(){
//     return fetch('https://fakestoreapi.com/products').then(
//         (data) => data.json()
//     )
// }

//  function getProductByIdAPI(id){
//     return fetch(`https://fakestoreapi.com/products/${id}`).then(
//         (data) => data.json()
//     )
// }

// const productAPI ={
//     getProductAPI,
//     getProductByIdAPI
// }

// export default productAPI;

