import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMenuItems } from '../services/api';
import { useRef} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Latestdishes = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const swiperElRef = useRef(null);
  
  //   useEffect(() => {
  //     // listen for Swiper events using addEventListener
  //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress);
  //     });
  
  //     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
  //       console.log('slide changed');
  //     });
  //   }, []);
    useEffect(() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 600);
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
          const [swiper, progress] = e.detail;
          console.log(progress);
        });
    
        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
          console.log('slide changed');
        });
      const fetchMenuItems = async () => {
        try {
          const response = await getMenuItems();
          setMenuItems(response.data);
        } catch (error) {
          console.error('Error fetching menu items:', error);
        }
      };
  
      fetchMenuItems();
    }, []);
   
  return (
    
    <div class="sider-container">
    
        <div className='slider-title'>
            Latest Dishes
        </div>
        <div style={{width: "100%", height: "23vh"}}>
        <swiper-container
      ref={swiperElRef}
      slides-per-view="4"
      navigation="true"
    >
    {menuItems.map((item) => (
      <swiper-slide>
      
      {loading ? ( <div class="loading-v">
      </div>) : (
      <Link to={`/menu/${item.id}`}> 
      <div key={item.id} class="slider-content"> 
                <div class="star">{item.star}star</div> 
                <div class="food-name">{item.name}</div>
                    <div class="price-dollar">Price: ${item.price}</div>
                    <div class="discount">-{item.discount}% discount</div> 
            </div> 
            </Link> )}
        </swiper-slide>
        ))}
      
    </swiper-container>
    </div>
        </div>
  )
}

export default Latestdishes;