import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
// import { useUser } from "../context/user";
import supabase from "@supabase/supabase-js";

export default function Home() {
  const [clicked, setClicked] = useState(0);
  // const { user } = useUser();

  useEffect(() => {
    const getInitialClicks = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("clicks")
        .eq("id", user.id)
        .single();

        console.log({data})
    };
    getInitialClicks()
  }, []);
  const incrementCount = () => {
    setClicked(clicked + 1);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Impression Tracker</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
