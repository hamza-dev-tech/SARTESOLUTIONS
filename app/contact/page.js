import Navbar from '@/src/components/Navbar/Navbar'
import React from 'react'
import "./contact.css"
import Hero from '@/src/components/Hero/Hero'
import Footer from '@/src/components/Footer/Footer'
import Contact from '@/src/components/Contact/Contact'
import Script from 'next/script'


export const metadata = {
  title: "Contact | Sarte Solution",
  description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/contact`,
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Contact | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    url: `${process.env.NEXTAUTH_URL}/contact`,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "DigitalSolutions",
    headline: "Contact | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
    author: {
     "@type": "Organization",
      name: "Sarte Solution",
    },

  },
};



const ContactPage = () => {
  return (
    <div className='app'>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-170T4531W6"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-170T4531W6');
        `}
      </Script>
      <Navbar />
      <Hero title1="Contact Us" title2="Today" des="At Sarte Solution, we are dedicated to providing exceptional service and support. Whether you have questions, need assistance, or want to discuss potential collaborations, our team is here to help. Reach out to us via email, phone, or the contact form below. Stay connected with us through our social media channels for the latest updates. We look forward to hearing from you!

" />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
