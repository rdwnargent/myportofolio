import React from "react"
import "./contact.css"
import {FiMail} from "react-icons/fi"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
const contact = () => {
  return( 
  <section id="contact">
   <h5>Get In Touch</h5>
   <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <FiMail/>
        <h4>Email</h4>
        <h5>muhridwantap24@gmail.com</h5>
        <a href="mailto:muhridwantap24@gmail.com" target="_blank">Send a message</a>

      </article>
      <article className="contact__option">
        <RiMessengerLine/>
        <h4>Mesengger</h4>
        <h5>muh ridwan</h5>
        <a href="mailto:muhridwantap24@gmail.com" target="_blank">Send a message</a>

      </article>
      <article className="contact__option">
        <BsWhatsapp/>
        <h4>Whatsapp</h4>
        <h5>082296933345</h5>
        <a href="https://api.whatsapp.com/send?phone=6282296933345" target="_blank">Send a message</a>

      </article>
</div>
{/* END OF CONTACT OPTIONS */}
<form action="">
  <input type="text" name="name" placeholder="Your Full Name" recuired />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
  <button type="submit" className="btn btn-primary">Send Message</button>
</form>


    </div>
  </section>
  )
}

export default contact
