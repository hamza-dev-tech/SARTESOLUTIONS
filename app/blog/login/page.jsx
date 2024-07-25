"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("https://sartesolutions.vercel.app/blog");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.socialButton} onClick={() => signIn("google")}>
            Sign in with Google
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
