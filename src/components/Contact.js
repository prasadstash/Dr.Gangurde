import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_57bm5so', 'template_gq63sdt', form.current, 'Yw33ABFhWRFRGZv3l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 




  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d73.7862826!3d18.5610163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcc374eb445%3A0x54b6fbe6e5847ed3!2sThe%20Bowl%20Licious!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form ref={form} onSubmit={sendEmail}>
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input name="from_name" type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input name="from_email" type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input name="from_number" type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
