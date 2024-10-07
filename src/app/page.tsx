import Head from "next/head";
import { MapWithLeaflet } from "./MapWithLeaflet";

const Home = () => {
  return (
    <>
      <Head>
        <title>Korean History Map</title>
      </Head>
      <main className="flex flex-col items-center justify-center bg-[#f9f5ef] min-h-screen">
        <MapWithLeaflet />
      </main>
    </>
  );
};

export default Home;
