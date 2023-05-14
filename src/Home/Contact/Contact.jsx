import React from 'react'

const Contact = () => {
  return (
    <div>
      
      <section className="contact">
        <h2 className="text_center">Contact Us</h2>
        <div className="form">
            <input className="form_input" type="text" name="name" id="name" placeholder="Enter Your Name"/>
            <input className="form_input" type="number" name="phone" id="phone" placeholder="Enter Your Phone"/>
            <input className="form_input" type="email" name="email" id="email" placeholder="Enter Your Email"/>
            <textarea className="form_input" name="text" id="text" cols="30" rows="10"placeholder="Ellaborate Your concern">
            </textarea>
            <button className="btn btn_dark">Submit</button>
        </div>
    </section>
    </div>
  )
}

export default Contact
