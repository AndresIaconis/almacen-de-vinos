import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, IconButton } from '@mui/material';
import { useCart } from '../../context/CartContext.js';
import { useNavigate } from 'react-router-dom';



export default function ItemGrid({ item }) {
    const { name, img, price,id, stock  } = item
    const { addItem } = useCart()
    const navigate = useNavigate()


    const onAdd = () => {
        let purchase = {
            id, name, price, stock, img, quantity: 1
        }
        addItem(purchase)
    }


    return (
        <>
            <Card sx={{ width: 220, height: 250, textAlign:"center" }}>
                <>
                    <CardMedia
                        component="img"
                        height="115"
                        width="90%"
                        image={img}
                        alt="img"
                    />
                    <CardContent padding="5px">
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, fontWeight: "bold", padding: "5px" }} >
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                            ${price}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ positition: "relative" }} >
                        <Button

                            onClick={()=>navigate(`/detail/${id}`) }
                            variant="contained"
                            sx={{ width: "55%", fontSize: "10px", paddingBottom: "20px" }}
                        >
                            Detalles
                        </Button>
            
                    </CardContent>
                    <br />
                    <br />
                </>

            </Card>
        </>
    );

}
