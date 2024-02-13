// components/MenuItemDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCateItemDetails } from '../services/apiv2';
import demo from './images/demo.jpg';
import './MenuDetails.css';
import SimilarProducts from './SimilarProducts';
import Footer from './Footer';
import MessagePopup from "./MessagePopup";


const MenuDetail = ({ addToCart }) => {
    
    const { itemId } = useParams();
    const [menuItems, setMenuItems] = useState(null);

    const [showPopup, setShowPopup] = useState(false);

    const showMessage = () => {
      setShowPopup(true);
    };
  
    const hideMessage = () => {
      setShowPopup(false);
    };
  
    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const response = await getCateItemDetails(itemId);
          setMenuItems(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching menu item:', error);
        }
      };
  
      fetchMenuItems();
    }, [itemId]);
  
    if (!menuItems) {
      return <div class="loading">
      <div class='uil-ring-css' style={{transform: "scale(0.79)"}}>
        <div></div>
      </div>
    </div>;
    }

  // Fetch additional details using the itemId if needed

  return (
    <div>
    <section id='menudetails'>

    <div class="horizontal-card">
    <div class="card-image">
      <img src={`http://localhost:8000/uploads/`+menuItems.file_path} alt="Card Image"/>
    </div>
    <div className='align-cen'>
    <div class="card-content">
      <h2>{menuItems.name}</h2>
      <p>{menuItems.description}</p>
      <div ><button onClick={() => { addToCart(menuItems); showMessage()}}>Add to cart</button></div>
      {showPopup && <MessagePopup message="Added to the cart. Click the cart icon to view the orders." duration={3000} onClose={hideMessage} /> }
      
    </div>
    </div>
  </div><br />
  <div className='detail-content'>
      <div className='detail-price'><div className='price-title'>Price</div>Rs.{menuItems.price}</div>
      <div className='detail-discount'><div className='price-title'>Discount</div>-{menuItems.discount}%</div>
      <div className='detail-rating'><div className='price-title'>Tag</div>{menuItems.tag} </div>
    </div>

      {/* <div className='detail-banner'>
        <div className='colm-1'>
        <div class="menu-items">{menuItems.star}star</div>
        <div class="menu-items">{menuItems.name}</div>
        <div class="menu-items">Price: ${menuItems.price}</div>
        <div class="menu-items">-{menuItems.discount}% discount</div>
        <div class="menu-items">{menuItems.details}</div>
        <button className='styled-button'>Add to cart</button>
        </div>
        <div className='colm-2' style={{backgroundImage: `url(${imgs})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}> */}
          {/* <img src={imgs} className='detail-img' alt='image' />  */}
        {/* </div>
      </div> */}
        {/* <div id="banner-container">
            
            <div class="banner-text">
            <p>Menu Item Detail</p>
            <div class="slider-content">
                <div class="star">{menuItems.star}star</div>
                <div class="food-name">{menuItems.name}</div>
                    <div class="price-dollar">Price: ${menuItems.price}</div>
                    <div class="discount">-{menuItems.discount}% discount</div>
            </div>
                  </div>
        </div> */}
    </section>

    <section id='similarproducts'>
        <SimilarProducts />

    </section>
    <br/>
    <Footer />
    </div>
  );
}

export default MenuDetail;
