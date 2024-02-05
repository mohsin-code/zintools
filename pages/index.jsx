import Head from "next/head";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import data from "@/services/data";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zintools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <Navbar />
        <Slider data={data} title="Bookmarks" />
        <Slider data={data} title="Convert to PDF" />
        <Slider data={data} title="Convert from PDF" />
        <Footer />
      </main>
    </>
  );
}
