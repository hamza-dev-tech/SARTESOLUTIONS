import Menu from "@/src/components/Blog/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/src/components/Blog/comments/Comments";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Keyword from "@/src/components/Blog/keyword/Keyword";
import { FaEye } from "react-icons/fa";




export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getData(slug);

  if (!data) {
    return notFound();
  }

  // Fetch keywords
  const keywordsData = await fetch(
    `${process.env.NEXTAUTH_URL}/api/keywords?postSlug=${slug}`
  ).then((res) => res.json());
  const keywords = keywordsData.keywords.map((item) => item.keyword);

  const description = data.postDesc?.substring(0, 160);
  const title = `${data.title} - Sarte Solutions Blog`;
  
  // Ensure the title length is between 30-60 characters
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;

  return {
    title: optimizedTitle,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/posts/${data.slug}`,
      languages: {
        "en-US": `${process.env.NEXTAUTH_URL}/posts/${data.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: optimizedTitle,
      description,
      url: `${process.env.NEXTAUTH_URL}/posts/${data.slug}`,
      images: [
        {
          url: data.img || "/default-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description,
      image: data.img || "/default-image.png",
    },
    robots: 'index, follow',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description,
      image: data.img || "/default-image.png",
      author: {
        "@type": "Person",
        name: data.user?.name,
      },
      datePublished: data.createdAt,
    },
  };
}



const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);


  

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
                        fill
                        className={styles.avatar}
                      />
                    </div>
                  )}
                  <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user?.name}</span>
                    <span className={styles.date}>
                      {data?.createdAt?.substring(0, 10)}
                    </span>
                  </div>
                  <span className={styles.views}>
            <FaEye className={styles.eyeIcon} /> {data.views}
          </span>
                </div>
              </div>
              {data?.img && (
                <div className={styles.imageContainer}>
                  <Image src={data.img} alt="" fill className={styles.image} />
                </div>
              )}
            </div>
            <div className={styles.content}>
              <div className={styles.post}>
                <div
                  className={styles.description}
                  
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
