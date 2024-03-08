import React, { useEffect } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';

const Products = () => {

    const { products, getProduct } = useProductsContext()

    useEffect(() => {
        getProduct()
    }, [])


    console.log(products);

    return <Box>
        {
            products.map((el, idx) => (
                <ProductCard el={el} key={idx} />
            ))

        }
    </Box>;
};

export default Products;