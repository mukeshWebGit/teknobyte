import { Helmet } from "react-helmet-async";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Axios from "axios"; 
import { Store } from "../Store";
import { toast } from "react-toastify";

export default function SignupScreen(){
  const navigate = useNavigate();
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const {state, dispatch:ctxDispatch} = useContext(Store);
    const { userInfo } = state;

    const backendUrl = process.env.REACT_APP_API_URL;

    const submitHandler = async (e) => { 
      e.preventDefault();
      if(password !== confirmPassword){
        toast.error('password do not match');
        return;
      }
      try{
        const {data} = await Axios.post(`${backendUrl}/api/users/signup`, { 
          name,
          email,
          password,
        });
        ctxDispatch ({type:'USER_SIGNUP', payload:data});
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate(redirect || '/')
      }catch (err){
        toast.error('invalid Email or Password');
      }
    }
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, redirect, userInfo]);
    return(
        
        <Container className="small-container">
            <Helmet>Sign Up</Helmet>
           <div className="heading"><h1 className="text-center">Sign Up</h1></div> 
            <div className="signinBox">
            <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" required /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
      </Form.Group> 
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Password" required/>
      </Form.Group> 
      <div className="d-grid pb-2">
      <Button variant="danger"   type="submit">
        Sign In
      </Button>
      </div>
      <div className="mb-3 text-center">
        New User ? {' '}
        <Link to={`/signin?redirect=${redirect}`}>Alredy have an account</Link>
      </div>
    </Form>
    </div>
        </Container>
    );
}