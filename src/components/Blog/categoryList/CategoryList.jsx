"use client"
import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://sartesolutions.vercel.app/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cat-wrapper">
      <div className="container">
        <div className="cat-container">
          <div className="cat-head">
            <span className="title">Popular Categories</span>
          </div>
          <div className="categories">
            {data.map((item, index) => (
              <Link
                href={`/blog/categories?cat=${item.slug}`}
                className={`category ${item.slug}`}
                key={index}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="image"
                  />
                )}
                <span className="des" style={{ fontSize: "1rem" }}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
