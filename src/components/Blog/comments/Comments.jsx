"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Failed to fetch data");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading, error } = useSWR(
    `https://sartesolutions.vercel.app/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (desc.trim() === "") return;

    setIsSubmitting(true);
    try {
      const res = await fetch("https://sartesolutions.vercel.app/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc, postSlug }),
      });

      if (!res.ok) {
        const error = new Error("Failed to submit comment");
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }

      setDesc("");
      mutate();
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      ) : (
        <div className={styles.authMessage}>
          <Link href="/blog/login">Login to write a comment</Link>
        </div>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          <div className={styles.error}>
            Error loading comments: {error.message} (Status: {error.status})
            {error.info && <pre>{JSON.stringify(error.info, null, 2)}</pre>}
          </div>
        ) : (
          data?.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
