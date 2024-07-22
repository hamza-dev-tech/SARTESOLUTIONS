
import CardList from "@/src/components/Blog/cardList/CardList";
import "./singleCateg.css";
import Menu from "@/src/components/Blog/Menu/Menu";
import "./Page.css"
import Navbar from "@/src/components/Navbar/Navbar";
import NavBar from "@/src/components/Blog/navbar/NavBar";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="app">
      <Navbar />
      <NavBar />
      <div className="content">
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
