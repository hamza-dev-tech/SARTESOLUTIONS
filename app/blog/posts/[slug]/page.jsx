import Menu from "@/src/components/Blog/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/src/components/Blog/comments/Comments";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Keyword from "@/src/components/Blog/keyword/Keyword";
import { FaEye } from "react-icons/fa";

const getData = async (slug) => {
  const res = await fetch(`https://sartesolutions.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  let data;
  try {
    data = await getData(slug);
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <>
        <Navbar />
        <div className={styles.errorContainer}>
          <h1>Error loading post</h1>
          <p>There was an error loading the post. Please try again later.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.hitwrapper}>
        <div className={styles.container}>
          <div className={styles.hitcontainer}>
            <div className={styles.infoContainer}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>{data?.title}</h1>
                <div className={styles.user}>
                  {data?.user?.image && (
                    <div className={styles.userImageContainer}>
                      <Image
                        src={data.user.image}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className={styles.avatar}
                      />
                    </div>
                  )}
                  <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user.name}</span>
                    <span className={styles.date}>
                      {data?.createdAt.substring(0, 10)}
                    </span>
                    <span className={styles.views}>
                      <FaEye className={styles.eyeIcon} /> {data.views}
                    </span>
                  </div>
                </div>
              </div>
              {data?.img && (
                <div className={styles.imageContainer}>
                  <Image
                    src={data.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className={styles.image}
                  />
                </div>
              )}
            </div>
            <div className={styles.content}>
              <div className={styles.post}>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: data?.desc }}
                />
                <div className={styles.comment}>
                  <Comments postSlug={slug} />
                  <Keyword postSlug={slug} />
                </div>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
