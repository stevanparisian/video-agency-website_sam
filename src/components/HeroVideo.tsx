import React from 'react';
import styles from '../styles/HeroVideo.module.css';

const HeroVideo: React.FC = () => (
  <div className={styles.videoContainer}>
    <video className={styles.video} autoPlay muted loop playsInline>
      <source src="/videos/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default HeroVideo;
