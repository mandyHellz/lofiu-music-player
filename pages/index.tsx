import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Music Player</title>
      </Head>

      <div>Music player</div>
    </DefaultLayout>
  );
};

export default Home;
