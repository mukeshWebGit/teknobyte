import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import logger from 'use-reducer-logger';   
import { Products } from '../component/product';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const ProductList = () => { 
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
      }); 
      const backendUrl = process.env.REACT_APP_API_URL;
      const [category, setCategory] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            
          try {
            const result = await axios.get(`${backendUrl}/api/products`);
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message });
          } 
          const resultCategory = await axios.get(`${backendUrl}/api/categories`);
          setCategory(resultCategory.data);
          }; 
          fetchData();
        }, [backendUrl]);  
      const params = useParams();  

       
    return(
      <>
      <section className="title">
      {category.filter((byCat) => byCat.categoryName === params.id).map((pro) => (
          <div className="container" key={pro._id}>
          <h2>{pro.categoryName}</h2>
          <Helmet> <title>{pro.categoryName} </title></Helmet>
          <div className="breadcum"><Link to="#">Home</Link> <i className="fa fa-angle-right" aria-hidden="true"></i>   {pro.categoryName} </div> 
          </div> 
      ))
      }   </section>
        <section className="product"> 
        <div className="container product_list">
       
        <div className="row text-center">
{loading? (
      <div>Loading...</div>
    ): error ? (
      <div>{Error}</div>
    ) : (
      products.filter((byCat) => byCat.category === params.id).map((product) => (
             <div className="col-md-4" key={product._id}>
                <div className="productLists">
                <Products product={product}/>
                </div>   
            </div>   
                
             
        ))
        )}
      </div>
      </div>
      </section>
      </>
    )
};