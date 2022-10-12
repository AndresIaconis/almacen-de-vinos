import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function ItemCount({ stock, onAdd, count, setCount }) {

    return (
        <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>

            <CardActions>
                <Stack direction="row" spacing={1} sx={{ paddingTop: "2px" }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setCount(count + 1)}
                        disabled={count === stock}
                        padding="0 0"
                        sx={{ border: "1px solid rgb(36 24 64)"}}
                        >
                        <AddIcon />
                    </Button>
                    <Box style={{ fontSize: 22 }} >
                        {count}
                    </Box>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setCount(count - 1)}
                        sx={{ border: "1px solid rgb(36 24 64)"}}
                        >
                        <RemoveIcon />
                    </Button>
                </Stack>
            </CardActions>
                <Button variant="contained"
                    sx={{ width: "100%", fontSize: "10px", paddingBottom: "2px", color: "white" }}
                    color="primary"
                    disabled={count === 0}
                    onClick={onAdd}>
                    Agregar al carrito
                </Button>
        </div>
    );

}
