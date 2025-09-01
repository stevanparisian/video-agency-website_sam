import React from 'react';

export interface HeroVideoProps {
  title: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ title }) => (
  <section>
    <h1>{title}</h1>
    <video controls src="/sample.mp4" />
  </section>
);
