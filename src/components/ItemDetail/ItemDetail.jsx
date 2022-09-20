import * as React from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ItemCount } from '../ItemCount';




export default function ItemDetail({ productDetail, loading }) {

  const [count, setCount] = useState(1);
  const [buy, setBuy] = useState(false);
  const { img, price, name, stock, id } = productDetail;
  const navigate = useNavigate()
  const { addItem } = useCart()


  const onAdd = () => {
    let purchase = {
      id, name, price, stock, img, quantity: count
    }
    setBuy(true);
    addItem(purchase)
  }
  console.log(productDetail)
  return (
    <div>
      {/* <Box
        sx={{
          display: 'flex',
          marginLeft: "2%",
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "95%",
            height: "150%",
          },
        }}
      > */}
      <Paper
        elevation={2}
        sx={{
          display: 'absolute',
          //   flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "95%",
            height: "cover",
          },
        }}>
        {loading ?
          <LoadingButton loading sx={{ width: 200, height: 290 }} />
          :
          <>
            <Grid container spacing={5}>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  style={{
                    padding: "8vh 10vh",
                    // height="300px"
                  }}
                  image={img}
                  alt="img"
                />
              </Grid>
              <Grid item xs={6} md={6} style={{ alignItems: 'center' }} >
                <CardContent>
                  <Typography variant="body2" color="text.primary" sx={{ fontSize: 16, fontWeight: "bold", padding: "5px" }} >
                    {name}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="div" marginBottom="0px">
                    ${price.toLocaleString('de-DE')}
                  </Typography>
                </CardContent>
                <CardContent sx={{ positition: "relative", bottom: "25px", textAlign: "-webkit-center" }} >
                  <br />
                  <br />
                  <div
                    style={{
                      width: "20vh",
                    }}>
                    {!buy
                      ? <ItemCount stock={stock}  onAdd={onAdd} count={count} setCount={setCount} />
                      : <>
                        <Button variant="contained"
                          onClick={() => navigate(`/cart`)}
                          sx={{ width: "55%", height: "40px", fontSize: "12px", margin: "10px" }}
                        >
                          Ir al carrito
                        </Button>
                        <Button
                          onClick={() => navigate(`/category/all`)}
                          variant="contained"
                          sx={{ width: "35%", height: "40px", fontSize: "12px", margin: "10px" }}
                        >
                          Seguir comprando
                        </Button>
                      </>}
                  </div>
                </CardContent>
              </Grid>




             
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>


            </Grid>
          </>
        }
      </Paper>
      {/* </Box> */}
    </div>
  )
}
