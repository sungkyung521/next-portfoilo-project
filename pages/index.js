import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import Hero from "../components/home/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>    
      <Head>
        <title>김성경 개발 노트</title>
        <meta name="description" content="Next-portfolio-project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
