import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { FaEye } from "react-icons/fa";

const MenuPosts = ({ posts = [], withImage }) => {
  return (
    <div className={styles.items}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link href={`/blog/posts/${post.slug}`} key={post.id} className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image src={post.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
              <h3 className={styles.postTitle}>
                {post.title}
              </h3>
              <div className={styles.detail}>
                
                <span className={styles.date}> {post.createdAt.substring(0, 10)}</span>
                <span className={styles.views}>
                  <FaEye className={styles.eyeIcon} /> {post.views}
                </span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default MenuPosts;
