import { AccountCircle } from '@mui/icons-material';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function CheckOut() {


    const { cart, cartTotal, clear } = useCart();
    const [send, setSend] = useState(false);
    const [idCompra, setIdCompra] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        finishPurchase(data)
        setLoading(true)
    }

    function finishPurchase(data) {

        let order = {
            buyer: data,
            carrito: cart,
            total: Number(cartTotal()),
        };
        const db = getFirestore();
        const miCollection = collection(db, "order");
        addDoc(miCollection, order)
            .then (({id}) => {
                setIdCompra(id)
                clear()
                setSend(true)
            })
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10vh 0',
                textAlign: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                },
            }}
            >

                    <Grid sx={{ padding: '5vh 10vh' }}>
                        {!send
                            ?
                            <>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: 25, fontWeight: "bold", paddingBottom: "4vh" }} >
                                    Ingresa tus datos
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <TextField
                                            color="primary"
                                            autoComplete='given-name'
                                            id="input-with-sx"
                                            label="Nombre"
                                            variant="standard"
                                            type="text"
                                            error={errors.nombre}
                                            helperText={errors.nombre ? "Ingrese un nombre valido" : ""}
                                            {...register("nombre", { required: true, minLength: 3, maxLength: 40, pattern: /^[a-zA-Z]+$/ })}
                                        />
                                    </Box>
                                    <br />
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <TextField
                                            color="primary"
                                            autoComplete='family-name'
                                            id="input-with-sx"
                                            label="Apellido"
                                            variant="standard"
                                            type="text"
                                            error={errors.apellido}
                                            helperText={errors.apellido ? "Ingrese un apellido valido" : ""}
                                            {...register("apellido", { required: true, minLength: 3, maxLength: 40, pattern: /^[a-zA-Z]+$/ })}
                                        />
                                    </Box>
                                    <br />
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <TextField
                                            color="primary"
                                            id="input-with-sx"
                                            label="Telefono"
                                            autoComplete='phone'
                                            variant="standard"
                                            helperText={errors.tel ? "Ingrese un teléfono valido" : ""}
                                            error={errors.tel}
                                            {...register("tel", { required: "Ingrese un telefono valido", minLength: 6, maxLength: 20, pattern: /^(0|[0-9]\d*)(\.\d+)?$/ })}
                                        />
                                    </Box>
                                    <br />
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '10vh' }}>
                                        <TextField
                                            color="primary"
                                            id="input-with-sx"
                                            label="Email"
                                            autoComplete='email'
                                            variant="standard"
                                            error={errors.email}
                                            helperText={errors.email ? "Ingrese un email valido" : ""}
                                            {...register("email", {
                                                required: true, maxLength: 50, pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Email no valido"
                                                }
                                            })}
                                            type="text" />
                                    </Box>
                                    {!loading ?
                                        <Button
                                            disabled = {cart.length===0}
                                            variant="contained"
                                            endIcon={<SendIcon />}
                                            type="submit"
                                            color="primary"
                                        >
                                            Enviar
                                        </Button>
                                        :
                                        <Button
                                            disabled
                                            variant="contained"
                                            color="secondary"
                                            sx={{ color: "white" }}
                                        >
                                            Espere...
                                        </Button>
                                    }
                                </form>
                            </>
                            :
                            <Grid sx={{ padding: '10vh 0' }}>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: 25, fontWeight: "bold", padding: "5px" }} >
                                    {!error ? "Su compra ha sido registrada" : "Error al procesar los datos"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 19, fontWeight: "bold", padding: "5px" }} >
                                    {!error ? "Muchas gracias" : "Intente nuevamente en un instante"}
                                </Typography>
                                <br />
                                {!idCompra
                                    ? <CircularProgress color="secondary" />
                                    : <Typography variant="body2" color="text.primary" sx={{ fontSize: 15, fontWeight: "bold", padding: "5px" }} >
                                        {!error ? "Su numero de pedido " + idCompra : ""}
                                    </Typography>
                                }

                            </Grid>
                        }
                    </Grid>
            </Box>

        </>
    )
}
