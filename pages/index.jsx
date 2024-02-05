import Head from "next/head";
import Navbar from "@/components/Navbar";
import Grid from "@/components/Grid";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
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
        <Grid />
        <Slider />
        <Grid />
        <Grid />
        <Footer />
      </main>
    </>
  );
}
