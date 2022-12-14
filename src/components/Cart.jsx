import { CardContent, CardMedia, Typography } from "@mui/material";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Cart() {

    const { cart, removeItem, sumItem, cartTotal,reduceItem, clear } = useCart();
    const navigate = useNavigate()
    console.log(cart);

    return (
        <section >
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Carro
                                                </MDBTypography>
                                                {cart.length !== 0 
                                                ?<MDBTypography className="mb-0 text-muted"
                                                                onClick={() =>clear()}
                                                                style={{cursor:"pointer", fontWeight:"bold"}}>
                                                        Vaciar Carrito
                                                    </MDBTypography>
                                                :""}
                                            </div>

                                            {
                                            cart.length !== 0 ? cart.map((item) => (

                                                <div key={item.id}>
                                                <hr className="my-4" />
                                                <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                    <MDBCol md="2" lg="2" xl="2">
                                                        <MDBCardImage
                                                            src={item.img}
                                                            fluid className="rounded-3" alt={item.name} />
                                                    </MDBCol>
                                                    <MDBCol md="3" lg="3" xl="3">
                                                        <MDBTypography tag="h6" className="text-muted">
                                                            {item.category}
                                                        </MDBTypography>
                                                        <MDBTypography tag="h6" className="text-black mb-0">
                                                            {item.name}
                                                        </MDBTypography>
                                                    </MDBCol>
                                                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                        <MDBBtn color="link" className="px-2"
                                                            onClick={() =>reduceItem(item)}>
                                                            <MDBIcon fas icon="minus" />
                                                        </MDBBtn>

                                                        <MDBInput type="number" min="0" max={item.stock} value={item.quantity} size="sm" />

                                                        <MDBBtn color="link" className="px-2"
                                                            onClick={() =>sumItem(item)}
                                                        >
                                                            <MDBIcon fas icon="plus" />
                                                        </MDBBtn>
                                                    </MDBCol>
                                                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                        <MDBTypography tag="h6" className="mb-0">
                                                            ${(item.price*item.quantity).toLocaleString('de-DE')}
                                                        </MDBTypography>
                                                    </MDBCol>
                                                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                        <a href="#!" className="text-muted">
                                                            <MDBIcon 
                                                            fas icon="times"
                                                            onClick={()=>removeItem(item.id)} 
                                                            />
                                                        </a>
                                                    </MDBCol>
                                                </MDBRow>

                                            </div>
                                            
                                            )
                                            )
                                                :
                                                <>

                                                    <CardContent padding="5px">
                                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 30, padding: "40px 0" }} >
                                                            No tenes productos en el carro
                                                        </Typography>
                                                    </CardContent>
                                                </>

                                            }

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBCardText tag="a"
                                                        onClick={() => navigate(`/category/all`)} 
                                                        className="text-body"
                                                        style={{cursor:"pointer"}}>
                                                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Ir a productos
                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Total
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    items {cart.length}
                                                </MDBTypography>
                                                <MDBTypography tag="h5">


                                                    ${cartTotal().toLocaleString('de-DE')} total

                                                </MDBTypography>
                                            </div>


                                            <hr className="my-4" />


                                            <MDBBtn color="dark" block size="lg" onClick={() => navigate(`/checkout`)} >
                                                Pagar
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
