import Menu from "@/src/components/Blog/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/src/components/Blog/comments/Comments";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Keyword from "@/src/components/Blog/keyword/Keyword";
import { FaEye } from "react-icons/fa";
import { htmlToText } from "html-to-text";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import Script from "next/script";

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

  const rawDescription = data.desc?.substring(0, 160) || "";
  const description = htmlToText(rawDescription);

  // Ensure the description length is within 55 to 200 characters
  const trimmedDescription =
    description.length > 200
      ? description.substring(0, 197) + "..."
      : description;
  const finalDescription =
    trimmedDescription.length < 55
      ? "Blog | Sarte Solution"
      : trimmedDescription;

  const title = `${data.title} - Sarte Solutions Blog`;

  // Ensure the title length is between 30-60 characters
  const optimizedTitle =
    title.length > 60 ? title.substring(0, 57) + "..." : title;

  return {
    title: optimizedTitle,
    description: finalDescription,
    keywords: keywords.join(", "),
    alternates: {
      canonical: `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      languages: {
        "en-US": `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: optimizedTitle,
      description: finalDescription,
      url: `${process.env.NEXTAUTH_URL}/blog/posts/${data.slug}`,
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
      description: finalDescription,
      image: data.img || "/default-image.png",
    },
    robots: "index, follow",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: finalDescription,
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

  const postUrl = `${process.env.NEXTAUTH_URL}/blog/posts/${slug}`;
  const encodedTitle = encodeURIComponent(data.title);
  const encodedDescription = encodeURIComponent(
    htmlToText(data.desc || "").substring(0, 200)
  );

  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434"
     crossorigin="anonymous"></Script>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-170T4531W6"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-170T4531W6');
        `}
      </Script>
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
                <div className={styles.socialShare}>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={30} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${encodedTitle}&summary=${encodedDescription}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href={`https://www.pinterest.com/pin/create/button/?url=${postUrl}&media=${data.img}&description=${encodedDescription}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest size={30} />
                  </a>
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
