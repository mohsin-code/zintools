import Head from "next/head";
import Navbar from "@/components/Navbar";
import GridItem from "@/components/GridItem";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zintools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <GridItem />
      </main>
    </>
  );
}
