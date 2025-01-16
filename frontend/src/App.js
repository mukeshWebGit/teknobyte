import React from 'react';
import { HomeScreen } from "./screens/home"; 
import { Link } from 'react-router-dom'; 

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProductList } from './screens/productList';
import { ProductDetails } from './screens/productDetails';
import { Header } from './screens/header';
import { Search } from './screens/search';
import CartScreen from './screens/cartScreen';
import SigninScreen from './screens/signinScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShippingAddress } from './screens/shippingAddress';
import SignupScreen from './screens/signupScreen';
import PaymentMethod from './screens/paymentMethod';
import PlaceOrderScreen from './screens/placeOrderScreen';
import OrderScreen from './screens/orderScreen';
import OrderHistoryScreen from './screens/orderHistoryScreen';
import ProfileScreen from './screens/profileScreen';
 function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer position='bottom-center' limit={1}></ToastContainer>
      <header>
        <Header></Header>
      </header>
      
      <Routes>
        <Route path="/" element ={<HomeScreen/>}></Route>
        <Route path="/category/:id" element ={<ProductList/>}></Route>
        <Route path="/product/:slug" element ={<ProductDetails/>}></Route>
        <Route path="/search" element ={ <Search /> }></Route>
        <Route path="/cart" element ={ <CartScreen /> }></Route>
        <Route path="/signin" element ={ <SigninScreen /> }></Route>
        <Route path="/signup" element ={ <SignupScreen /> }></Route>
        <Route path="/profile" element ={ <ProfileScreen /> }></Route>
        <Route path="/shipping" element ={ <ShippingAddress /> }></Route>
        <Route path="/payment" element ={ <PaymentMethod /> }></Route>
        <Route path="/placeorder" element ={ <PlaceOrderScreen /> }></Route>
        <Route path="/order/:id" element ={ <OrderScreen /> }></Route>
        <Route path="/orderHistory" element={ <OrderHistoryScreen/> }></Route>
      </Routes>
      
      
      <footer className="copyright">
		<div className="container">
		<div className="row">
			<div className="col-md-6">
				Copyright © 2020 <strong>Teknobyte Portable Electronics</strong> All rights reserved.
			</div>
			<div className="col-md-6 text-end">
				<Link to="#">Terms &amp; Conditions</Link>
				<Link to="#">Privacy Policy</Link>
				
			</div>
			</div>
			</div>
		</footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
