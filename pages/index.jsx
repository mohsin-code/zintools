import Head from "next/head";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import data from "@/services/data";
import { useState } from "react";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <>
      <Head>
        <title>Zintools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <Navbar />
        {bookmarks.length > 0 && <Slider data={bookmarks} bookmarks={bookmarks} setBookmarks={setBookmarks} title="Bookmarks" />}
        <Slider data={data.slice(3, 10)} bookmarks={bookmarks} setBookmarks={setBookmarks} title="Convert to PDF" />
        <Slider data={data.slice(10)} bookmarks={bookmarks} setBookmarks={setBookmarks} title="Convert from PDF" />
        <Footer />
      </main>
    </>
  );
}
