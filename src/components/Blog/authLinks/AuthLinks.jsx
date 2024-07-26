"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const AuthLinks = ({color}) => {


  const { status } = useSession();

  return (
    <div >
      {status === "unauthenticated" ? (
        <Link style={{color: color}} href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={styles.cont}>
          {/* <Link style={{color: color}} href="/blog/write" className={styles.link}>
            Write
          </Link> */}
          <span style={{color: "red"}} className={styles.link} onClick={signOut}>
            Logout
          </span>
          {useSession?.user?.image && (
            <Image
              src={session.user.image}
              alt="User Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
