import Navbar from '@/src/components/Navbar/Navbar'
import React from 'react'
import "./contact.css"
import Hero from '@/src/components/Hero/Hero'
import Footer from '@/src/components/Footer/Footer'
import Contact from '@/src/components/Contact/Contact'

const ContactPage = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero title1="Contact Us" title2="Today" des="At Sarte Solution, we are dedicated to providing exceptional service and support. Whether you have questions, need assistance, or want to discuss potential collaborations, our team is here to help. Reach out to us via email, phone, or the contact form below. Stay connected with us through our social media channels for the latest updates. We look forward to hearing from you!

" />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
