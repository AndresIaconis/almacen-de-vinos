import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Item = ({ product }) => {
  const { id, name, price,img } = product
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={name}
          height="200"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Detalles
          </Button>
        </CardActions>
      </Card>

    </>
  )
}
