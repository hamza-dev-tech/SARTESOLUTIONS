
import CardList from "@/src/components/Blog/cardList/CardList";
import "./singleCateg.css";
import Menu from "@/src/components/Blog/Menu/Menu";
import "./Page.css"
import Navbar from "@/src/components/Navbar/Navbar";

import Footer from "@/src/components/Footer/Footer";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="app">
      <Navbar />
      <h1 className="title" style={{textAlign:"center", marginTop:'3rem'}}>{cat}  Blog</h1>
      <div className="content">
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
