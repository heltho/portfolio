import Hero from "@/components/organisms/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas Hellin | Fullstack Developer</title>
        <meta
          name="description"
          content="Thomas Hellin's personnal portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-8 mx-auto max-w-7xl">
        <Hero />
      </main>
    </>
  );
}
