import React from 'react'
import "./CardList.css"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card';


const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};



const CardList = async ({page, cat}) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="card-wrapper">
    <div className="container">
      <div className="card-container">
        <div className="card">
        <span
              style={{fontSize:'2rem', marginBottom:'2rem' }}
              className="title"

            >
              Recent Posts
            </span>
            <div className="posts">
            {posts?.map((item) => (
              <Card item={item} key={item._id} />
            ))}
            </div>
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
    </div>
    </div>
  )
}

export default CardList
