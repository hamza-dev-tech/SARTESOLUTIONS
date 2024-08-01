
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { htmlToText } from 'html-to-text';

const Card = ({ item, key }) => {
  // Convert HTML to plain text and limit the description length
  const description = htmlToText(item.desc, {
    wordwrap: 130
  }).substring(0, 250);

  return (
    <div className={styles.post} key={key}>
       {item.img && (
      <div className={styles.cardimageContainer}>
        <Image src={item.img} alt="" fill className={styles.cardimage} />
      </div>
       )}
      <div className={styles.cardTextContainer}>
        <div className={styles.cardDetail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)}
          </span>
          <span>-</span>
     
          <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
          <span className={styles.views}>
            <FaEye className={styles.eyeIcon} />
            <span>
              
               {item.views}
              </span>
          </span>
        </div>
        <Link href={`/blog/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.postDes}>{description}</p>
        <Link className={styles.cardlink} href={`/blog/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
      <hr style={{width:'95%', border:'1px solid var(--secondary-color)', opacity:0.2, marginTop:'2rem', width:'20rem', textAlign:'center'}}></hr>
    </div>
  );
};

export default Card;
