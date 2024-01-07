import React from "react";
import AboutImg from "../assets/images/Bowlicious_AboutMe.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Indulge in an unparalleled culinary experience at our establishment,
             where authenticity takes center stage. We pride ourselves on using only the finest ingredients,
             ensuring a delectable feast with no artificial colors or preservatives.
            </p>
            <p>
            Explore a diverse menu that spans North Indian delights, tantalizing Thai dishes,
            flavorful pasta, succulent kebabs, and refreshing milkshakes.
            Whether it's a casual meal or a special occasion, we cater to all tastes and preferences.
            </p>
            <p>
            Additionally,
            we welcome party orders, guaranteeing a memorable and flavorful celebration for every palate.
            </p>
             
            
            
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
