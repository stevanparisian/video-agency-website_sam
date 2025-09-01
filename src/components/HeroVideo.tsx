import React from "react";

type HeroVideoProps = {
  source?: string;
  poster?: string;
  children?: React.ReactNode;
};

export default function HeroVideo({
  source = "/hero.mp4",
  poster = "/hero-poster.jpg",
  children = <h1>Captez l'attention</h1>,
}: HeroVideoProps) {
  return (
    <section className="hero-video">
      <video
        className="hero-video__media"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={source} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <div className="hero-video__overlay">{children}</div>
    </section>
  );
}
