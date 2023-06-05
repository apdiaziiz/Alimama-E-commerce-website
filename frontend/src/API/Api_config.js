import axios from "axios"
import { BASIC_API } from "./Api"

const categories = {
    electronics : "electronics",
    jewelery : "jewelery",
    mens_clothing : "men's clothing",
    womens_clothing : "women's clothing"
}

const getAllCategories = {
    getAllProducts : () => {
        const results = BASIC_API ;
        return results;
    },
    getElectronics : () => {
        const results = BASIC_API + '/category/' + categories.electronics;
        return results;
    },
    getJewelery : () => {
        const results = BASIC_API + '/category/' + categories.jewelery;
        return results;
    },
    getMens : () => {
        const results = BASIC_API + '/category/' + categories.mens_clothing;
        return results;
    },
    getWomens : () => {
        const results = BASIC_API + '/category/' + categories.womens_clothing;
        return results;
    }
}

export default getAllCategories;