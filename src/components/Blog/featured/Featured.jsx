import "./Featured.css";
import Image from "next/image";
import { htmlToText } from "html-to-text";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/featured`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

const Featured = async () => {
  let data;

  try {
    data = await getData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="featured-wrapper">
        <div className="container">
          <div className="featured-container">
            <div className="featured-head">
              <span className="title">Error</span>
              <span className="tag">Failed to load featured data</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Access data.posts if data is returned in that format
  const post = data?.posts;

  // Convert HTML to plain text and limit the description length
  const description = post?.desc
    ? htmlToText(post.desc, { wordwrap: 130 }).substring(0, 420)
    : "";

  return (
    <div className="featured-wrapper">
      <div className="container">
        <div className="featured-container">
          <div className="featured-head">
            <span className="title">Discover Stories and</span>
            <span className="tag">Creative Ideas</span>
          </div>

          {post ? (
            <div className="post">
              <div className="imgContainer">
                <Image
                  style="post-img"
                 
                  src={post.img}
                  alt={post.title || "Featured Image"}
                  fill
                />
              </div>
              <div className="textContainer">
                <h1 className="postTitle">{post.title}</h1>
                <div className="postDesc">{description}</div>

                <Link className="read-button" href={`/blog/posts/${post.slug}`}>
                  Read More
                </Link>
              </div>
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
