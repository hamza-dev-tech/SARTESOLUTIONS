import React from "react";
import "./CategoryList.css";

import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
// eslint-disable-next-line @next/next/no-async-client-component
const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="cat-wrapper">
      <div className="container">
        <div className="cat-container">
          <div className="cat-head">
            <span className="title">Popular Categories</span>
          </div>

          <div className="categories">
            {data.map((item,index) => (
              <Link
                href={`/blog/categories?cat=${item.slug}`}
                className={`category ${item.slug}`}
                key={index}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt=""
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
