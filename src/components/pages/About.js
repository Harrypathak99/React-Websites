// About.js
import React from 'react';
import Footer from '../Footer';


const About = () => {
  return (
    <div>
       <section id="about">
        <div class="container">
            <h2>Who We Are</h2>
            <p>This is about page. You can write the things of your restaurant here in a fashionable way and you can also edit his page as per your wish.</p>
            <p>Same line goes to this paragraph too.</p>
        </div>
    </section>
    
    <section id="team">
        <div class="container">
            <h2>Our Team</h2>
            <div class="team-member">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww" alt="Team Member 1" />
                <h3>Someone some</h3>
                <p>CEO</p>
            </div>
            <div class="team-member">
                <img src="https://img.freepik.com/free-photo/cheerful-african-guy-with-narrow-dark-eyes-fluffy-hair-dressed-elegant-white-shirt_273609-14082.jpg" alt="Team Member 2" />
                <h3>Hari Pathak</h3>
                <p>Designer</p>
            </div>
            {/* <!-- Add more team members as needed --> */}
        </div>
    </section>
    <Footer />
    </div>
  );
}

export default About;
