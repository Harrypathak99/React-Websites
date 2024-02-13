// components/MenuItemDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategoryItems } from '../services/apiv2';
import demo from './images/demo.jpg';
import './CateDetail.css';
import SimilarProducts from './SimilarProducts';
import Footer from './Footer';
const CateDetail = () => {
    
    // const { itemId } = useParams();
    const { itemId } = useParams();
    const [data, setData] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    
  
    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const response = await getCategoryItems();
          setMenuItems(response.data);
          console.log(response.data);

        } catch (error) {
          console.error('Error fetching menu item:', error);
        }
      };
  
      fetchMenuItems();
    }, []);



    
   

    if (!menuItems) {
      return <div class="loading">
      <div class='uil-ring-css' style={{transform: "scale(0.79)"}}>
        <div></div>
      </div>
    </div>;
    }

  // Fetch additional details using the itemId if needed

  return (
    <>
    <div className="cate-title" style={{display: "flex", justifyContent: "center"}}>Categories - Dishes</div>
    <div className='grid-container'>
    {menuItems?.filter(item => item.menu_id == itemId).map((item) => (
        <Link to={`/menu/${item.id}`}> 
      
            <div key={item.id} class="cate-card">
            <img src={`http://localhost:8000/uploads/`+item.file_path} alt='none' />
      <div class="cate-card-content">
      <h2>{item.name}</h2>
      <p>Rs.{item.price}</p>
      </div>
      </div>
     </Link>
        ))}

    </div>
    <Footer />
    </>
  );
}

export default CateDetail;
