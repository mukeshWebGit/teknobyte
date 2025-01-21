import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Link,  useParams, useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import { Store } from "../Store";

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
export const ProductDetails = () => { 
  const navigate = useNavigate();
  const [active, setActive] = useState(null); 
   const queryParams = new URLSearchParams(window.location.search)
  const colorPro = queryParams.get("color");
  const [selectedColor, setSelectedColor] = useState(colorPro);
  const [selectedImage, setSelectedImage] = useState(null);
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });
  const proCatId = product.category;
  const [category, setCategory] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`${backendUrl}/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      const resultCategory = await axios.get(`${backendUrl}/api/categories`);
      setCategory(resultCategory.data);
    };
    fetchData();
    
  }, [slug, backendUrl]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id && x.selectedCol === colorPro);
    const selectedCol = selectedColor ; 
    const selectedImg = selectedImage ; 
    const quantity = existItem ? existItem.quantity + 1 : 1;  
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity, selectedCol, selectedImg },
    }); 
      navigate('/cart');
  } 
   
    return(
        
          loading ? <div>Loading...</div>
          : error? <div>{error}</div>
          : <div> 
            <section className="title">
      {category.filter((byCat) => byCat.categoryName === proCatId).map((pro) => (
          <div className="container" key={pro._id}>
          <h2>{pro.categoryName}</h2>
          <div className="breadcum"><Link to="#">Home</Link> <i className="fa fa-angle-right" aria-hidden="true"></i>   {pro.categoryName} </div> 
          </div> 
      ))
      }   </section>
            <section className="product">
              <div className="container product_list">
                <div className="row">
                  <div className="col-md-5">
                    <div className="gallery text-center">
                      {colorPro ? product.color.filter((color) => color.colorName === colorPro).map((colorF) => (
                     <img src = {colorF.gallery} alt= {product.name} /> 
                     ))
                      : <img src = {product.imageBig} alt= {product.name} />} 
                  </div>  
                  </div>
                  <div className="col-md-7">
                  <div  className="proDetails">
			<div className="product-title">
        <Helmet> <title>{product.name} </title></Helmet>
				<h1>{product.name} </h1>  
			</div>
			<div className="specification">
      <ul>
        {Object.keys(product.Specification).map((key, index) => 
          <li key={index}><span>{key}</span> : {product.Specification[key]} </li>
          )}
          </ul>
          
            {product.color 
            ? 
            <ul>
          <li> 
            <span>Color :</span>
          <div className="colorOpt">
            <div className="row">
              {product.color.map((colorOpt) => (
                <div key={colorOpt.colorName} className={`col ${colorPro === colorOpt.colorName ? 'active' : active === colorOpt && 'active'}`}> <div onClick={() => {setActive(colorOpt);   setSelectedColor(colorOpt.colorName); setSelectedImage(colorOpt.colorImg); navigate(`?color=${colorOpt.colorName}`)}}><p>{colorOpt.colorName}</p>
                <img src={colorOpt.colorImg} alt={colorOpt.colorName} />     </div>    </div> 
              ))
              
              }
          </div>
          </div>  
          </li></ul>
          :null
          }
       
     
			</div>
			<div className="mt20"><button type="button" onClick={addToCartHandler} className="buy">Add to Cart</button></div>
			</div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        
    )
}