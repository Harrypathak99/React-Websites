// Home.js
import React, { useRef, useState, useEffect } from 'react';
import Menu from './Menu.js';
import './banner-style.css';
import { getCategoryItems } from '../services/apiv2';
import Navbar from './Navbar.js';
import Categories from './Categories.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import demo from './images/demo.jpg';
import Footer from './Footer.js';
import { Link, Route } from 'react-router-dom';
import ProductList from '../ProductList.js';
import Cart from './../Cart.js';

const Home = () => {
  const swiperRef = useRef();
  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await getCategoryItems();
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

 
  return (
    <>
    <div>
    <section id="banner">
        <div id="banner-container" style={{paddingTop: "0px"}}>
        <Swiper
        loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
        pagination={{
          type: 'progressbar',
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
    >
     {menuItems.map((item) => (
      <SwiperSlide>
                <div className='image-content detail-swiper'>
                  <img src={`http://localhost:8000/uploads/`+item.file_path} alt='imagess' class='img-class' style={{width: "100%", height: "300px", filter: "brightness(40%)"}} />
                  <div className='ds-content'>
                  <Link to={`/menu/${item.id}`}> 
                     <div className='ds-detail'><h2>{item.name}</h2></div>
                     <div className='ds-detail-next'>{item.description}</div>
                     </Link>
                  </div>
                </div>
            </SwiperSlide>
     ))};
            {/* <SwiperSlide>
                <div className='image-content detail-swiper'>
                  <img src={demo} alt='imagess' class='img-class' style={{width: "100%", height: "300px", filter: "brightness(40%)"}} />
                  <div className='ds-content'>
                     <div className='ds-detail'><h2>Burger</h2></div>
                     <div className='ds-detail-next'>veg - cheese - mushroom</div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='image-content detail-swiper'>
                  <img src={demo} alt='imagess' class='img-class' style={{width: "100%", height: "300px", filter: "brightness(40%)"}} />
                  <div className='ds-content'>
                     <div className='ds-detail'><h2>Momo</h2></div>
                     <div className='ds-detail-next'>veg - chicken - paneer</div>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='image-content detail-swiper'>
                  <img src={demo} alt='imagess' class='img-class' style={{width: "100%", height: "300px", filter: "brightness(40%)"}} />
                  <div className='ds-content'>
                     <div className='ds-detail'><h2>Chowmin</h2></div>
                     <div className='ds-detail-next'>veg - chicken - mushroom</div>
                  </div>
                </div>
            </SwiperSlide> */}

           </Swiper>
            <div class="banner-text">
                <p>Feel the Taste</p>
                <p>Enriched with Variety of Flavors</p>
            </div>
        </div>
        

    </section>
    
    <Menu />
    <Categories />
    
    </div>
    <Footer />
    </>
  );
}

export default Home;
