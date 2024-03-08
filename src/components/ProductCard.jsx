import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProductsContext } from '../context/ProductsContext';
import './index.css'

const ProductCard = ({ el }) => {
    const { deleteProduct } = useProductsContext();
    return (
        <div className="container">
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={el.image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {el.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {el.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => deleteProduct(el.id)} size="small">Delete</Button>
                        <Button size="small">Edit</Button>
                    </CardActions>
                </Card >
            </div>
        </div>

    );
};

export default ProductCard;