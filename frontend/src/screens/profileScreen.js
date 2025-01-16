import React, { useContext, useReducer, useState } from 'react'
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';

const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_REQUEST':
        return { ...state, loadingUpdate: true };
      case 'UPDATE_SUCCESS':
        return { ...state,  loadingUpdate: false };
      case 'UPDATE_FAIL':
        return { ...state, loadingUpdate: false };
      default:
        return state;
    }
  };

export default function ProfileScreen() {
    const {state, dispatch:ctxDispatch} = useContext(Store);
        const {userInfo} = state;  
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [{ loadingUpdate }, dispatch] = useReducer(reducer,{
        loadingUpdate:false,
    });
    const submitHandler = async (e) =>{
         e.preventDefault();
         try{
            const { data } = await axios.put(
                '/api/users/profile',
                {name, email, password},
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
              );
              dispatch({
                type:'UPDATE_SUCCESS',
            });
            ctxDispatch ({type:'USER_SIGNIN', payload:data});
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('User Update Successfully');
         }catch(err){
            dispatch({
                type:'FETCH_FAIL',
            });
            toast.error(getError(err));
         }
    }
  return (
    <div className='container'>
        <Helmet>
            <title>User profile</title>
        </Helmet>
        <h1 className="my-3">User profile</h1>
        <div className="signinBox">
            <Form onSubmit= {submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} required/> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} required /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} /> 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="text" onChange={(e) => setConfirmPassword(e.target.value)}  /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">     
                    <Button variant="danger" type="submit">Update Profile </Button>
                </Form.Group>
            </Form>
    </div>
    </div>
  )
}
