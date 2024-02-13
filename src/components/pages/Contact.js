// Contact.js
import React from 'react';
import './Page.css'
import Footer from '../Footer';

const Contact = () => {
  return (
    <>
    <div class="container">
    <h1>Contact Us</h1>
    <div class="contact-form">
      <form action="#" method="post">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
