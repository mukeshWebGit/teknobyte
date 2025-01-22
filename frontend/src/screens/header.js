import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Link, useNavigate, createSearchParams } from "react-router-dom"
import { Store } from "../Store"; 


export const Header = () => {
    const [category, setCategory] = useState([]); 
    const [searchField, setSearchField] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
      setSearchField(e.target.value.toLowerCase());
    };
     
      function handleSubmit(e, res) {
        e.preventDefault();
        navigate({
          pathname: "search",
          search: createSearchParams({
              key: searchField
          }).toString()
      });
        //navigate(`search?key=${searchField}`);
      }
      const backendUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => { 
      const resultCategory = await axios.get(`${backendUrl}/api/categories`);
      setCategory(resultCategory.data); 
    };
    fetchData();
   
  },[]); 
  const {state, dispatch:ctxdispatch} = useContext(Store);
  const {cart, userInfo} = state;

  const signOutHandler = () => {
    ctxdispatch({type : 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  }
    return(
        <div className="container">
        <Row className='align-items-center'>
            <Col md={3}>   
              <Link to="/"> <img src="/images/logo.png" alt="teknobyte" className="logo" />  </Link> 
            </Col>
            <Col md={9}> 
            <div className="MenuBg">
      <ul className="MainMenu list-unstyled align-items-center justify-content-end mb-0">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="#">Products <span className="caret"></span></Link>
          <ul className="sub-menu list-unstyled m-0">
            {category.map((cat) => (
                <li key={cat._id}><Link to={`/category/${cat.categoryName}`}>{cat.categoryName}</Link></li>
            ))} 
           </ul>
          
        </li>
        <li><Link to="#">About Us</Link></li>
        <li><Link to="#">Contact Us</Link></li>
        <li className="searchBg px-1"><div className="searchFild"><form onSubmit={handleSubmit}><input type="text" placeholder="search" className="search" onChange={handleChange}/> <button type="submit" className="searchBtn"><img src="../images/search.png" alt="search"/></button> </form></div></li>
        <li className="px-1 dropdown"><div className="signIn"> 
        {userInfo ? (
          <>
          <Link to="#">{userInfo.name} <span className="caret"></span></Link>
          <ul className="sub-menu list-unstyled m-0">
            <li>
            <Link to="/profile">  User Profile </Link>
            </li>
            <li>
            <Link to="/orderHistory">   Order History </Link>
            </li>
            <li>
            <Link to="/#signOut" onClick={signOutHandler}>  Sign Out </Link>
            </li>
         </ul>
         </>
        ) : (
         <Link className="nav-link" to = "/signin"> Login </Link>
        )}
        </div></li>
        <li className="px-1"><div className="cart"><Link to="/cart"><img src="../images/cart.png" alt="Cart"/>
              {cart.cartItems.length > 0 && (
                <span className="cartItem">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
              ) }
        </Link></div></li>
         
      </ul>
     
    </div>
            </Col>
        </Row>
     </div>
    )
}