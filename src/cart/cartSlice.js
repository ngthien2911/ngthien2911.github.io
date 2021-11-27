import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const cartSlice  = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1
                
            } else {
            const tempCart = {...action.payload, cartQuantity:1}
            state.cartItems.push(tempCart)
           
            }
        },

        removeFromCart:(state,action) =>{
            const newcCartItems = state.cartItems.filter(
                item => item.id!== action.payload.id
            );
            state.cartItems=newcCartItems
        },

        decreaseCartQuantity:(state,action) =>{
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1){state.cartItems[itemIndex].cartQuantity -=1}
            else {const newcCartItems = state.cartItems.filter(
                item => item.id!== action.payload.id
            );
            state.cartItems=newcCartItems}
        },

        clearCart:(state,action)=>{
            state.cartItems=[]
        },

        countTotalPrice:(state,action)=>{
           let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price,cartQuantity} =cartItem;
                const itemTotalPrice   = price * cartQuantity;
                cartTotal.total += itemTotalPrice;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },{ total:0,quantity:0})

            state.cartTotalQuantity= quantity;
            state.cartTotalAmount = total;
        }
    }
});

export const {addToCart,removeFromCart,decreaseCartQuantity,clearCart,countTotalPrice} = cartSlice.actions;

export default cartSlice.reducer;