
import CardList from "@/src/components/Blog/cardList/CardList";
import './singleCateg.css'
import Menu from "@/src/components/Blog/Menu/Menu";
import "./Page.css"
import Navbar from "@/src/components/Navbar/Navbar";

import Footer from "@/src/components/Footer/Footer";
import Featured from "@/src/components/Blog/featured/Featured";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="app">
   
      <Navbar />

<Featured />

<h1 style={{marginTop:"8rem" ,lineHeight:'2rem'}} className="title" >{cat} Blog</h1>

 
      <div className="content" >
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
