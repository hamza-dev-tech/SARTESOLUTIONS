
import React from 'react'

import "./Blog.css"
import Footer from '@/src/components/Footer/Footer'
import Featured from '@/src/components/Blog/featured/Featured'
import CategoryList from '@/src/components/Blog/categoryList/CategoryList'
import CardList from '@/src/components/Blog/cardList/CardList'
import Menu from '@/src/components/Blog/Menu/Menu'
import Navbar from '../../src/components/Navbar/Navbar'
import Script from 'next/script'



export const metadata = {
  title: "Blog | Sarte Solution",
  description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/blog`,
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    url: `${process.env.NEXTAUTH_URL}/blog`,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Blog | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    image: "/og-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Blog | Sarte Solution",
    description: "Sarte Solution's blog offers insights on digital solutions, web development, IT infrastructure, digital marketing, and emerging technologies for business success.",
    image: "/og-image.png",
    author: {
     "@type": "Organization",
      name: "Sarte Solution",
    },

  },
};




const Blogs = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
  
    return (
      <div className="app">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434"
     crossorigin="anonymous"></Script>
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
     
        <Featured />
        <CategoryList />
        <div className="content">
          <CardList page={page}/>
          <Menu />
        </div>
        <Footer />
      </div>
    );
 
}

export default Blogs


 

