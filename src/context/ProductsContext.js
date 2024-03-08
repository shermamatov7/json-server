import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const productsContext = createContext();
export const useProductsContext = () => useContext(productsContext)



const ProductsContext = ({ children }) => {
    const API = "http://localhost:3000/products";

    const [products, setProducts] = useState([])

    async function addProduct(product) {
        await axios.post(API, product)
        getProduct()
    }


    async function getProduct() {
        let { data } = await axios(API);
        setProducts(data)
    }

    async function deleteProduct(id) {
        await axios.delete(`${API}/${id}`)
        getProduct()
    }

    const values = {
        addProduct,
        getProduct,
        products,
        deleteProduct,
    };
    return (
        <productsContext.Provider value={values}>{children}</productsContext.Provider>
    );
};

export default ProductsContext;
