
import "./Menu.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";



const getPopular = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/popular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const popularData = await res.json();
  return popularData;
};


const getPicked = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/picked`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const pickedData = await res.json();
  return pickedData;
};




const Menu = async () => {
  let popularData;
  let pickedData;

  try {
    popularData = await getPopular();
    pickedData = await getPicked();
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="featured-wrapper">
        <div className="container">
          <div className="featured-container">
            <div className="featured-head">
              <span className="title">Error</span>
              <span className="tag">Failed to load data</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Access data.posts if data is returned in that format
  const popularposts = popularData?.posts;
  const pickedposts = pickedData?.posts;
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu">
          <h2 style={{ fontSize: "1.2rem" }} className="title2">{"What's hot"}</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Popular</h1>
          <MenuPosts posts={popularposts} withImage={true} />
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Discover by topic</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Categories</h1>
          <MenuCategories />
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Chosen by the editor</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Editors Pick</h1>
          <MenuPosts posts={pickedposts} withImage={true} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
