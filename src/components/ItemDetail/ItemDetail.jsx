import * as React from 'react';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount';





export default function ItemDetail({ productDetail, loading }) {

  const [count, setCount] = useState(1);
  const [buy, setBuy] = useState(false);
  const { price, name, stock, id, img } = productDetail;
  const navigate = useNavigate()
  const { addItem } = useCart()


  const onAdd = () => {
    let purchase = {
      id, name, price, stock, quantity:count, img
    }
    setBuy(true);
    addItem(purchase)
  }
  console.log(productDetail)
  return (
    <div>
      <Box
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
      >
        <Paper
          elevation={2}
          sx={{
            display: 'absolute',
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
                      height:"300px"
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
                      ${price}
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
                        ? <ItemCount stock={stock} onAdd={onAdd} count={count} setCount={setCount} />
                        : <>
                          <Button variant="contained"
                            onClick={() => navigate(`/cart`)}
                            sx={{ width: "100%", height: "40px", fontSize: "12px", margin: "10px" }}
                          >
                            Ir al carrito
                          </Button>
                          <Button
                            onClick={() => navigate(`/`)}
                            variant="contained"
                            sx={{ width: "100%", height: "40px", fontSize: "12px", margin: "10px" }}
                          >
                            Seguir comprando
                          </Button>
                        </>}
                    </div>
                  </CardContent>
                </Grid>


              </Grid>
            </>
          }
        </Paper>
      </Box>
    </div>
  )
}
