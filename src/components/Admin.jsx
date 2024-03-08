import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useProductsContext } from '../context/ProductsContext';

const Admin = () => {
    const { addProduct } = useProductsContext();

    const [inpValues, setInpValues] = useState({
        image: '',
        name: '',
        price: '',
    });

    function handleinputvalue(e) {
        const { name, value } = e.target;

        setInpValues((prevValues) => ({
            ...prevValues,
            [name]: name === 'price' ? Number(value) : value,
        }));
    }

    function handleCreate() {
        addProduct(inpValues);
        setInpValues({
            image: '',
            name: '',
            price: '',
        })


    }

    console.log(inpValues);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '80vh',
                justifyContent: 'center',
                gap: '25px',
               
            }}>
            <TextField
                onChange={handleinputvalue}
                id="outlined-image"
                label="image URL..."
                variant="outlined"
                name="image"
                value={inpValues.image}
            />
            <TextField
                onChange={handleinputvalue}
                id="outlined-name"
                label="Product name..."
                variant="outlined"
                name="name"
                value={inpValues.name}
            />
            <TextField
                onChange={handleinputvalue}
                id="outlined-price"
                label="Price..."
                variant="outlined"
                name="price"
                type="number"
                value={inpValues.price}
            />
            <Button onClick={handleCreate} variant="contained">Create</Button>
        </Box>
    );
};

export default Admin;
