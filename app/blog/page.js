import Navbar from '@/src/components/Navbar/Navbar'
import React from 'react'

import "./Page.css"

import Footer from '@/src/components/Footer/Footer'
import Featured from '@/src/components/Blog/featured/Featured'
import CategoryList from '@/src/components/Blog/categoryList/CategoryList'
import CardList from '@/src/components/Blog/cardList/CardList'
import Menu from '@/src/components/Blog/Menu/Menu'


const Blogs = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
  
    return (
      <div className="app">
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


 

