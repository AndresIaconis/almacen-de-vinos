import React from 'react'
import Item from './Item'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




export default function ItemList({ items, loading }) {


    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {
                        items.map((item) => (
                            <Grid item xs={12} sm={3} md={3} key={item.id} padding="0 1vw" >
                                <Item item={item}  />
                            </Grid>
                        ))}
                </Grid>
            </Box>


        </div>
    )
}

