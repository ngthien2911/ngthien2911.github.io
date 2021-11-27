import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import productAPI from './productAPI';

// export const getProduct = createAsyncThunk(
//     'product/getProduct',
//     async(_,thunkAPI) =>{ 
//         const response = await productAPI.getProductAPI();
//         return response
//     }
// )

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async(dispatch,getstate) =>{
    return await fetch('https://fakestoreapi.com/products').then(
      (res) => res.json()
    );
  }
)
        

    
 

const initialState={
    loading:true,
    products:[],
    error:null,
    clickedproduct:null,
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:{
    
        [getProduct.pending]: (state,action) =>{ 
            state.loading=true;
        },
        [getProduct.fulfilled]:(state,action) =>{ 
            // alert(JSON.stringify(action.payload))
            state.loading=false;
            state.products=action.payload
        },
        [getProduct.rejected]:(state,action) =>{ 
            state.loading=true;
            
        },
    }
})



export default productSlice.reducer;