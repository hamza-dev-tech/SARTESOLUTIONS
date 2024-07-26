"use client";

import styles from "./keyword.module.css";
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
    `/api/keywords?postSlug=${postSlug}`,
    fetcher
  );

  useEffect(() => {}, [data]);

  const [desc, setDesc] = useState("");

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <span
        style={{
          textAlign: "flex-start",
          color: "gray",
          fontSize: "1.8rem",
          marginBottom: "2rem",
        }}
        className="title"
      >
        Keywords
      </span>
      <div className={styles.keywordList}>
        {Array.isArray(data?.keywords)
          ? data.keywords.map((item, index) => (
              <div className={styles.keyword} key={index}>
                {item.keyword}
              </div>
            ))
          : "No keywords found"}
      </div>
    </>
  );
};

export default Keyword;
