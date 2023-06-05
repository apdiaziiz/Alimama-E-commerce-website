import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './Action-types';

export const getAllProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    return response.json();
})

const initialState = {
    data : [],
    amount : 0,
    loading : false,
    error : false
}
const cartSlices = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        increase : (state, {payload}) => {
            console.log(state);
            const cartItems = state.data.find(item => item.id !== payload.id);
            cartItems.amount = cartItems.amount + 1;
            console.log(cartItems)
        },
        decrease : (state, {payload}) => {
            const cartItems = state.data.find(item => item.id === payload.id);
            cartItems.amount = cartItems.amount - 1;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.pending, (state,action) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(getAllProducts.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = false
        })
        builder.addCase(getAllProducts.rejected, (state,action) => {
            state.loading = false
            state.error = true
        })
    }
})


// export const productReducer = (state, { type, payload }) => {
//     switch (type) {
//         case actionTypes.productType:
//             return {...state, data: payload}
//             break;
    
//         default:
//             break;
//     }
// }
export const { increase, decrease } = cartSlices.actions;

export default cartSlices.reducer