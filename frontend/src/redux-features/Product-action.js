import { actionTypes } from "./Action-types";

export const setProduct = (products) => {
    return {
        type : actionTypes.productType,
        payload : products
    }
}

export const selectedProduct = (products) => {
    return {
        type : actionTypes.selectedType,
        payload : products
    }
}

