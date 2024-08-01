"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useRef, useState, useEffect } from "react";
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
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: {
    container: [
      [{ 'header': '1'}, {'header': '2'}],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
    ],
  },
};
const formats = [
  'header', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'align', 'image'
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
  const [thumbnailUploading, setThumbnailUploading] = useState(false);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setPublishing(true);
    const postData = {
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug: catSlug || "coding", // Default category if not selected
      keywords,
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/posts/${data.slug}`);
    } else {
      console.error("Failed to create post");
    }
    setPublishing(false);
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnailUploading(true);

    const storage = getStorage(app);
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can add a progress indicator if needed
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setThumbnail(downloadURL);
          setMedia(downloadURL);
          setThumbnailUploading(false);
        });
      }
    );
  };

  const addKeyword = (e) => {
    e.preventDefault();
    if (keywordInput.trim() !== "" && keywords.length < 10) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);

      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // You can add a progress indicator if needed
        },
        (error) => {
          console.error("Upload failed", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection();
            quill.insertEmbed(range.index, "image", downloadURL);
          });
        }
      );
    };
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.getModule("toolbar").addHandler("image", imageHandler);
    }
  }, [quillRef]);

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <input
          type="text"
          placeholder="Title (Max 80 characters)"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={80}
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
        <button
          className={styles.publish}
          onClick={handleSubmit}
          disabled={publishing}
        >
          {publishing ? "Publishing..." : "Publish"}
        </button>

        <input
          type="file"
          id="thumbnail"
          onChange={handleThumbnailUpload}
          style={{ display: "none" }}
          disabled={thumbnailUploading}
        />
        <label htmlFor="thumbnail" className={styles.thumbnailButton}>
          {thumbnailUploading ? (
            "Uploading..."
          ) : thumbnail ? (
            <Image
              width={100}
              height={100}
              src={thumbnail}
              alt="Thumbnail"
              className={styles.thumbnail}
            />
          ) : (
            <>
              Upload Thumbnail
             
            </>
          )}
        </label>
        <small style={{marginBottom:'50px', marginTop:"10px"}}>Size less than 6MB, 1200 x 630 px recommended</small>
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
              placeholder="Add a keyword (Max 10)"
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
