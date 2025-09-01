import Head from "next/head";
import HeroVideo from "../components/HeroVideo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio vidéo — Démo</title>
        <meta name="description" content="Plateforme vidéo & pub" />
      </Head>
      <HeroVideo />
      <main style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <h1 style={{ fontFamily: "system-ui, sans-serif" }}>Hello, ça build 🔧</h1>
      </main>
    </>
  );
}
