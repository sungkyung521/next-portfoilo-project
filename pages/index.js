import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import Hero from "../components/home/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>    
      <Head>
        <title>Creative Kim Portfolio</title>
        <meta name="description" content="Next-portfolio-project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ 전체 폭을 채우는 Hero */}
      <section className="w-full min-h-screen text-gray-600 body-font">
        <Hero />
      </section>
    </Layout>
  );
}
