import React, { useState } from 'react'
import Image from '../../assests/contactPageImage.png' // update path if needed
import './contact.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, message })
  }

  return (
    <div className='contact-page'>
      <div className='text-zone'>
        <div id='contact'>
          <h1>Contact Me</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='contact-form'>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />

            <button className="flat-button" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div id="contact-img">
        <img src={Image} alt="Contact" />
      </div>
    </div>
  )
}

export default Contact
