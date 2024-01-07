import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="https://www.facebook.com/people/The-BOWL-Licious/61553757894493/?mibextid=LQQJ4d" class="fab fa-facebook-f"></a>
          {/* <a href="" class="fab fa-twitter"></a> */}
          <a href="https://www.instagram.com/thebowl.licious" class="fab fa-instagram"></a>
          {/* <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a> */}
        </div>
        <div class="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
          <a href="#">blogs</a>
        </div>
        <div class="credit">
          created by <span>Coding circulate</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
