import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CheckoutSteps from "../component/checkoutSteps";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { Store } from "../Store";

export default function PaymentMethod(){
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { 
        cart: { shippingAddress, paymentMethod }, 
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState(
        paymentMethod || 'Paypal' 
    ); 
    useEffect( () => {
        if(!shippingAddress){
            navigate('/shipping'); 
        }
    },[shippingAddress, navigate])
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({type: 'SAVE_PAYMENT_METHOD', payload:paymentMethodName});
        localStorage.setItem('paymentMethod', paymentMethodName);
        navigate('/placeorder');
    }
    return(
        <>
        
        <div className="container">
        <Helmet><title> Payment Method </title></Helmet>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="small-container">
            <h1 className="my-3"> Payment Method</h1>
            </div>
            <Form onSubmit={submitHandler}>
                <div className="mb-3">
                    <Form.Check
                    type ="radio"
                    id ="paypal"
                    label ="paypal"
                    value = "Paypal"
                    checked={paymentMethodName === 'Paypal'}
                    onChange = {(e) => setPaymentMethod(e.target.value) } /> 
                </div>
                <div className="mb-3">
                    <Form.Check
                    type ="radio"
                    id ="netBanking"
                    label ="netBanking"
                    value = "Net Banking"
                    checked={paymentMethodName === 'Net Banking'}
                    onChange = {(e) => setPaymentMethod(e.target.value) } /> 
                </div> 
                <div className="mb-3">
                    <Form.Check
                    type ="radio"
                    id ="cashOnDelivery"
                    label ="cash On Delivery"
                    value = "Cash On Delivery"
                    checked={paymentMethodName === 'Cash On Delivery'}
                    onChange = {(e) => setPaymentMethod(e.target.value) } /> 
                </div>
                <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
            </Form>
        </div>
        </>
    )
}