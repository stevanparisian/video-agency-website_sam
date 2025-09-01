codex/add-herovideo-component-with-styles
import React from 'react';
import HeroVideo from '../components/HeroVideo';

const Home: React.FC = () => (
  <main>
    <HeroVideo />
  </main>
);

export default Home;
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio vidéo — Démo</title>
        <meta name="description" content="Plateforme vidéo & pub" />
      </Head>
      <main style={{minHeight:"60vh", display:"grid", placeItems:"center"}}>
        <h1 style={{fontFamily:"system-ui, sans-serif"}}>Hello, ça build 🔧</h1>
      </main>
    </>
  );
}
 main
