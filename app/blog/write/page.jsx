"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useRef, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { app } from "@/Firebase";
import ReactQuill from "react-quill";

const modules = {
  toolbar: {
    container: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      [{ 'align': [] }],
      ['clean']                                         
    ],
    handlers: {
      image: () => { /* image handler function will be defined later */ }
    }
  },
};
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'align'
];

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const quillRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const postData = {
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug: catSlug || "coding", // Default category if not selected
      keywords,
    };

    console.log("Post data being sent:", postData);

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/posts/${data.slug}`);
    } else {
      console.error("Failed to create post:", await res.json());
    }
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage(app);
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setThumbnail(downloadURL);
          setMedia(downloadURL); // Ensure this line is here
        });
      }
    );
  };

  const addKeyword = (e) => {
    e.preventDefault();
    if (keywordInput.trim() !== "") {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles.editor}>
          <ReactQuill
            ref={quillRef}
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={modules}
            formats={formats}
          />
     
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.mobileWarning}>
          This feature is available only on PC.
        </div>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>

        <input
          type="file"
          id="thumbnail"
          onChange={handleThumbnailUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="thumbnail" className={styles.thumbnailButton}>
          {thumbnail ? (
            <Image
              width={100}
              height={100}
              src={thumbnail}
              alt="Thumbnail"
              className={styles.thumbnail}
            />
          ) : (
            "Upload Thumbnail (Square)"
          )}
        </label>
        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="coding">Coding</option>
          <option value="technews">Tech News</option>
          <option value="productivity">Productivity</option>
          <option value="cybersecurity">Cyber Security</option>
          <option value="techculture">Tech Culture</option>
        </select>
        <div className={styles.keywordContainer}>
          <form onSubmit={addKeyword}>
            <input
              type="text"
              placeholder="Add a keyword"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              className={styles.keywordInput}
            />
            <button type="submit" className={styles.addKeywordButton}>
              Add
            </button>
          </form>
          <div className={styles.keywordList}>
            {keywords.map((keyword, index) => (
              <div key={index} className={styles.keyword}>
                {keyword}
                <span
                  className={styles.removeKeyword}
                  onClick={() => removeKeyword(keyword)}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
