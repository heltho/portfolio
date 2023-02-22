import Biography from "@/components/organisms/Biography";
import Hero from "@/components/organisms/Hero";
import Skills from "@/components/organisms/Skills";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";

export default function Home({ page, navigation, settings }) {
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
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
