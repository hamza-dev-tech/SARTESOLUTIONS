"use client";
import styles from "../comments/comments.module.css";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Keyword = ({ postSlug }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/keywords?postSlug=${postSlug}`,
    fetcher
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [desc, setDesc] = useState("");

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.comments}>
      {Array.isArray(data?.keywords)
        ? data.keywords.map((item) => (
            <div className={styles.comment} key={item.id}>
              <p className={styles.desc}>{item.keyword}</p>
            </div>
          ))
        : "No keywords found"}
    </div>
  );
};

export default Keyword;
