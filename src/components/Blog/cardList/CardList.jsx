"use client"
import React, { useEffect, useState } from "react";
import "./CardList.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `https://sartesolutions.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CardList = ({ page, cat }) => {
  const [data, setData] = useState({ posts: [], count: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getData(page, cat);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, cat]);

  const POST_PER_PAGE = 4;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < data.count;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="card">
            <span style={{ fontSize: "2rem" }} className="title">
              Recent Posts
            </span>
            <div className="posts">
              {data.posts?.map((item) => (
                <Card item={item} key={item._id} />
              ))}
            </div>
          </div>
          <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
      </div>
    </div>
  );
};

export default CardList;
