// Menu.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMenuItems } from '../services/api';
import { useRef} from 'react';
import { register } from 'swiper/element/bundle';
import './banner-style.css';
import Trendingdishes from './Trendingdishes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Latestdishes from './Latestdishes';
import Categories from './Categories';
register();
// import Swiper and modules styles




const Menu = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    }, []);
  return (
    
    <section id="slider">
    
     <Trendingdishes />
      
        
      
    </section>
   
    
 
    //   {/* <ul>
    //     {menuItems.map((item) => (
    //       <li key={item.id}>{item.name} - {item.price}</li>
    //     ))}
    //   </ul> */}
    
  );
}

export default Menu;
