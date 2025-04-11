import React from 'react';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
const About = () => {
  return (
    <section className="about">
      <div className="about-intro">
        <h1>About Little Lemon</h1>
        <p>
          Welcome to Little Lemon – your go-to destination for fresh Mediterranean flavors
          in a cozy, modern setting. Our mission is to bring healthy, delicious dishes made
          with love and the freshest ingredients to your table.
        </p>
      </div>

      <div className="about-gallery">
        <div className="about-card">
          <img src={image1} alt="Mediterranean Dish" />
          <h3>Fresh Ingredients</h3>
          <p>We carefully select the finest ingredients to craft meals that are both nutritious and flavorful.</p>
        </div>
        <div className="about-card">
          <img src={image2} alt="Kitchen" />
          <h3>Authentic Recipes</h3>
          <p>Our chefs bring generations of experience to every dish, delivering an authentic taste of the Mediterranean.</p>
        </div>
        <div className="about-card">
          <img src={image3} alt="Restaurant Interior" />
          <h3>Cozy Ambiance</h3>
          <p>Enjoy your meal in a relaxed and welcoming atmosphere designed with your comfort in mind.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
