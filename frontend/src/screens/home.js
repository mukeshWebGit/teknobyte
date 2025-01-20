//import data from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper'; 
import logger from 'use-reducer-logger';
import {Helmet} from 'react-helmet-async';
import { useEffect, useReducer, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';  
import axios from 'axios'; 
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

export function HomeScreen()  {
   const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  }); 
  const backendUrl = process.env.REACT_APP_API_URL;

  
   // const [products, setProducts] = useState([]);
    const [Slides, setSlides] = useState([]); 
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        
      try {
        const result = await axios.get(`${backendUrl}api/products`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); 
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      } 
      
        //setProducts(result.data);
        const resultSlide = await axios.get(`${backendUrl}api/slides`);
        setSlides(resultSlide.data);
       // setSlides(data.slides);
      }; 
      fetchData();
    }, [backendUrl]); 
     
    return(
     
      <div>
      <Helmet> <title>Teknobyte</title></Helmet>
        <section className="slider"> 
          <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1} 
          navigation
      pagination={{ clickable: true }} 
        >
          {Slides.map((slide) => (
          <SwiperSlide key={slide._id}> <img src={slide.slideImg} alt="slides"/> </SwiperSlide> 
          ))
        }
        </Swiper>  
      
      </section> 
      
        
        <section className="product">
      
      <div className="heading text-center"><h2>Products</h2></div>
        <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={4.2} 
      navigation 
    >
{loading? (
    <div>Loading...</div>
  ): error ? (
    <div>{Error}</div>
  ) : (
    products.sort((a, b) => (a.productOrder > b.productOrder) ? 1 : -1).map((product) => (
       
                <SwiperSlide key={product._id}> 
                  <Products product={product}/>
                  </SwiperSlide>  
      
      ))
      )}
    </Swiper> 
    </section>
    <div className="separator"></div>
     
    <div className="separator"></div>
   
      </div>
    )
}