"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState, useRef } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import ReactQuill from "react-quill";
import { app } from "@/Firebase";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const quillRef = useRef();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  useEffect(() => {
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
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMedia(downloadURL);
          const editor = quillRef.current.getEditor();
          editor.clipboard.dangerouslyPasteHTML(
            editor.getSelection().index,
            `<p style="text-align: center; width:100%;"><img src="${downloadURL}" alt="Image" class="center" style="width: -webkit-fill-available; margin-left:auto; margin-right:auto;"/></p>`
          );
        });
      }
    );
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const postSlug = slugify(title);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: thumbnail,
        slug: postSlug,
        catSlug: catSlug || "technews", // If not selected, choose the general category
        keywords,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/posts/${data.slug}`);
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
          setThumbnail(downloadURL);
        });
      }
    );
  };

  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (keywordInput && !keywords.includes(keywordInput)) {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
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
          />
          <div className={styles.addFiles}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
            </div>
          )}

          </div>
          
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
          <img src={thumbnail} alt="Thumbnail" className={styles.thumbnail} />
        ) : (
          "Upload Thumbnail (Square)"
        )}
      </label>
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="coding">Coding</option>
        <option value="cybersecurity">Security</option>
        <option value="technews">Tech News</option>
        <option value="productivity">Productivity</option>
        <option value="techculture">Tech Culture</option>
      </select>
      <div className={styles.keywordContainer}>
        <form onSubmit={handleAddKeyword}>
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
                onClick={() => handleRemoveKeyword(keyword)}
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
