import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import Footer from "../common/footer/Footer"
const Contact = () => {
  return (
    <>
   
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input className="input"type='text' placeholder='Subject' />
            <textarea className="textarea" cols='30' rows='10'></textarea>
            <button >Submit Request</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
