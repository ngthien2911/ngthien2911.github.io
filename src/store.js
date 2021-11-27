import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice';

import { productsApi } from './product/productAPI';


export default configureStore({
    reducer:{
        [productsApi.reducerPath] : productsApi.reducer,
        cart:cartReducer,
        
    },
    middleware:(getDefaultMiddleware) =>{
       return (getDefaultMiddleware({serializableCheck: false,}).concat(productsApi.middleware))
    }
});