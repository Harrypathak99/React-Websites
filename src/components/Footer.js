import React from 'react'
import {FaContao, FaEnvelope, FaFacebook, FaHome, FaLocationArrow, FaMailBulk, FaNotesMedical, FaPage4, FaPagelines, FaPhone, FaPinterest, FaProjectDiagram, FaServicestack, FaTwitter, FaVoicemail, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <br />
    <footer>
   
      <div class="footer_content">
        <div class="first_section">
          <h3 class="footer_headings">About Us</h3>
         
          <p>
            This is a sample page created by me. I hope this helps somebody out there. 
            Its free and feel good to use.
          </p>
          <div class="social_icons">
            <i class="fa-brands fa-facebook"><FaFacebook /></i>
            <i class="fa-brands fa-twitter"><FaTwitter /></i>
            <i class="fa-brands fa-pinterest"><FaPinterest/></i>
            <i class="fa-brands fa-youtube"><FaYoutube/></i>
          </div>
        </div>
        <div class="second_section">
          <h3 class="footer_headings">Useful links</h3>
          <ul>
            <li><a href="#"><FaHome/> Home</a></li>
            <li><a href="#"><FaPagelines/> About</a></li>
            <li><a href="#"><FaServicestack/> Services</a></li>
            <li><a href="#"><FaProjectDiagram/> Projects</a></li>
            <li><a href="#"><FaPhone/> Contact Us</a></li>
          </ul>
        </div>
        <div class="third_section">
          <h3 class="footer_headings">Address</h3>
          <ul>
            <li>
              <i class="fa fa-envelope" style={{fontSize: '15px'}}><FaEnvelope/></i>
              <span>harrypathak99@gmail.com</span>
            </li>
            <li>
              <i class="fa-solid fa-location-dot" style={{fontSize: '15px'}}><FaLocationArrow/></i>
              <span>Kathmandu, Nepal </span>
            </li>

            <li>
              <i class="fa-solid fa-phone" style={{fontSize: '15px'}}><FaPhone/></i>
              <span>+977 985548855</span>
            </li>
          </ul>
        </div>
        
      </div>
   
    <div class="footer_txt">
      <p>
        All rights reservered by Hari Prasad Pathak      </p>
    </div>
  </footer>
  </>
  )
}

export default Footer