import React from 'react'
import ItemGrid from './Item'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




export default function ItemListGrid({ items, loading }) {



    const skeletonItem = [1, 2, 3, 4, 5, 6, 7, 8]


    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    {loading ?
                        items.map((item) => (
                            <Grid item xs={3} key={item}>
                                Cargando
                            </Grid>
                        ))
                        :
                        items.map((item) => (
                            <Grid item xs={12} sm={3} md={3} key={item.id} padding="0 1vw">
                                <ItemGrid item={item}  />
                            </Grid>
                        ))}
                </Grid>
            </Box>


        </div>
    )
}

