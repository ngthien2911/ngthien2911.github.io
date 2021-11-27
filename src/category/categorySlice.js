// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getElectronicsAPI, getJeweleryAPI } from './categoryAPI';


// export const getElectronics = createAsyncThunk(
//     'product/getProduct',
//     async(thunkAPI) =>{ 
//         const response = getElectronicsAPI();
//         return response
//     }
// )
        

    




// export const categorySlice = createSlice({
//     name:'category',
//     initialState:{
//         electronics:[],
//         loading:true,
        
//     },
//     reducers:{},
//     extraReducers:{
//         [getElectronics.pending]: (state,action) =>{ 
//             state.loading=true;
//         },
//         [getElectronics.fulfilled]:(state,action) =>{ 
//             // alert(JSON.stringify(action.payload))
//             state.loading=false;
//             state.electronics=action.payload
            
//         },
//         [getElectronics.rejected]:(state,action) =>{ 
//             state.loading=true;
            
//         },


//     }
// })



// export default categorySlice.reducer;