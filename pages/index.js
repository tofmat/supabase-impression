import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useRef} from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import {supabase} from "./supabase";


export default function Home() {
  const videoRef = useRef();
  const endFunction = async () => {
        const { data} = await supabase.rpc('increment', { row_id: 1 })
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Impression Tracker</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Tracking video impressions in Next.js with Supabase
        </h1>
      <CloudinaryContext cloud_name="ugwutotheeshoes">
        <div>
          <Video
            publicId="production_ID_3959604_vnbhqn"
            width="750px"
            height="420px"
            controls
            innerRef={videoRef}
            onEnded={endFunction}
          />
        </div>
      </CloudinaryContext>
      </main>
    </div>
  );
}
