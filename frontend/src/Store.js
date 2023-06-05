import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer, { productReducer } from '../src/redux-features/CartSlices'

// const combine = combineReducers(cartReducer, productReducer)


const store = configureStore({
    reducer : {
        cart : cartReducer,
    }
})

export default store;