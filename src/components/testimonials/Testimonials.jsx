import React from "react"
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



const Testimonials = () => {
  return (
  <section id="testimonial">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <div className="container testimonials__container">
      <div className="testimonial">
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
          
        </div>
        <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga quos atque aspernatur sequi unde repellendus veniam, veritatis asperiores reprehenderit velit? Nisi molestiae quas perferendis repudiandae dolorem facilis quo nesciunt.
          </small>
      </div>
      <div className="testimonial">
        <div className="client__avatar">
          <img src={AVTR2} alt="Avatar One" />
          
        </div>
        <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga quos atque aspernatur sequi unde repellendus veniam, veritatis asperiores reprehenderit velit? Nisi molestiae quas perferendis repudiandae dolorem facilis quo nesciunt.
          </small>
      </div>
      <div className="testimonial">
        <div className="client__avatar">
          <img src={AVTR3} alt="Avatar One" />
          
        </div>
        <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga quos atque aspernatur sequi unde repellendus veniam, veritatis asperiores reprehenderit velit? Nisi molestiae quas perferendis repudiandae dolorem facilis quo nesciunt.
          </small>
      </div>
      <div className="testimonial">
        <div className="client__avatar">
          <img src={AVTR4} alt="Avatar One" />
          
        </div>
        <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fuga quos atque aspernatur sequi unde repellendus veniam, veritatis asperiores reprehenderit velit? Nisi molestiae quas perferendis repudiandae dolorem facilis quo nesciunt.
          </small>
      </div>
      
    </div>
    


  </section>
  )
}

export default Testimonials
