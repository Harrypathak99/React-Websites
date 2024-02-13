import React, {useRef, useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from './images/user.png';
import cart_img from './../components/images/cart.png';
import './ToggleButton.css';
import Cart from "./../Cart"
import { FaBars } from 'react-icons/fa';
import $ from "jquery";

// import from './navmenu.js';
const Navbar = ({ cart, removeFromCart, updateQuantity }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const [show, toggleShow] = React.useState(false);
  const [show_cart, toggleShow_cart] = React.useState(false);
  const [menu, isMenu] = React.useState(false);
  let buttonRef = useRef();
  let buttonRef_cart = useRef();
  let menuRef = useRef();

  const togBtn = () => {
    toggleShow(!show);
  };
  const togBtn_cart = () => {
    toggleShow_cart(!show_cart);
  };
  const menuBtn = () => {
    isMenu(!menu);
  };

  useEffect(() => {

    // $("li").click(function() {
    //   $("li").removeClass("active");
    //   $(this).addClass("active");
    // });

    let handler = (e)=> {
      if(!buttonRef.current.contains(e.target)){
        toggleShow(false);
      }
    };
    let c_handler = (e)=> {
      if(!buttonRef_cart.current.contains(e.target)){
        toggleShow_cart(false);
      }
    };
    let m_handler = (e)=> {
      if(!menuRef.current.contains(e.target)){
        isMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);
    
    document.addEventListener('mousedown', m_handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      
      document.removeEventListener('mousedown', m_handler);
    };
  }, []);

 


  return (
    <>
  
    <div class={`navbar`}>

    <div className="menu_mbl nav__toggle" onClick={menuBtn} ref={menuRef}>
                  <FaBars style={{color: "white", fontSize: "20px", padding: "5px", display: "flex", alignContent: "center"}} />
                </div>

                <div class="title">
                    <div class="title-text">
                    <div class="h3-text">HARRY</div>
                    </div>
                </div>
               
                
                <div class="menu">
                    <ul>
                    <NavLink to="/" activeClassName="active"><li class="home">Home</li></NavLink>
                    <NavLink to="/about" activeClassName="active"><li class="home ">About</li></NavLink>
                    <NavLink to={`/gallery`} activeClassName="active"><li class="home ">Gallery</li></NavLink>
                    
                    <NavLink to={`/contact`} activeClassName="active"><li class="home ">Contact</li></NavLink>
                    </ul>
                </div>
              
                <div className='nav-user'>
                <div onClick={togBtn_cart} ref={buttonRef_cart} className={`cart__toggle`}>
                    <img src={cart_img} alt='nnee' />&nbsp; &nbsp;
                </div>
                <div class={`cart__wrapper user-menu ${show_cart ? 'go-right' : 'hidde'}`} style={{width: '400px'}}>
                <div>
      <h2 style={{textAlign:"center"}}>Cart</h2>
      <div style={{width: "100%", height: "2px", backgroundColor: "gray", marginBottom: "5px"}}></div>
      <ul style={{display: 'flex', flexDirection: 'column'}}>
        {cart.map(item => (
          <li key={item.id}>
            
            <div className="cart_btn"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            &nbsp; <span style={{width: "20px", display: "flex", justifyContent: "center"}}>{item.quantity}</span>&nbsp;&nbsp;
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
            <div className="cart_btn">
            &nbsp;{item.name} - ${item.price}&nbsp;
            </div>

            <div className="cart_btn">
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{width: "100%", height: "2px", backgroundColor: "gray", marginBottom: "5px"}}></div>
      <p style={{fontSize: '18px'}}>Total Price: Rs.{totalPrice}</p>
      <ul style={{display: "flex", justifyContent: "center"}}><li><div><button>Proceed to checkout</button></div></li></ul>
    </div>
                  </div>
                
                   

                  <div onClick={togBtn} ref={buttonRef} className={`nav__toggle`}><img src={user} alt='nnee' /></div>
                 
                  <div class={`nav__wrapper user-menu ${show ? 'go-right' : 'hidde'}`}>
                    <span>
                    <div><img src={cart_img} alt='nnee' />&nbsp; Harry Pathak</div>
                    </span>
                    <span>Orders</span>
                    <span>Log out</span>
                  </div>
                  
                </div>
                
                
            </div>

            <div className={`mobile-menu ${menu ? 'go-left' : 'hidde'}`}>
              <div className='mm-container'>
                <div className='title'>Harry Pathak</div>
                <div className='mm-content'>
                  <ul>
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Contact</li>

                  </ul>
                </div>
              </div>
            </div> 


            {/* <script src={navmenu} type="text/javascript" /> */}
            </>
            
  )
}

export default Navbar;