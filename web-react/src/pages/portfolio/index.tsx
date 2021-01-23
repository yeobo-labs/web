import React from 'react';
import { Link } from 'react-router-dom';
import MediaTextSection from '../../components/layout/media-text-section';
import gamesVideo from './videos/games.mp4';
import productivityVideo from './videos/productivity.mp4';
import styles from './portfolio.module.css';

const Portfolio = () => (
    <main>
        <MediaTextSection
            heading="Productivity"
            mediaSide="right"
            video={{ src: productivityVideo, autoPlay: true, loop: true }}>
            <p>Tools that can boost your productivity, no matter what you do.</p>
            <Link to="/portfolio/productivity" className={styles.portfolioSeeAll}>See all</Link>
        </MediaTextSection>
        <MediaTextSection
            heading="Fun &amp; Games"
            mediaSide="left"
            video={{ src: gamesVideo, autoPlay: true, loop: true }}>
            <p>Fight boredom with some fun games to play with your friends.</p>
            <Link to="/portfolio/fun-games" className={styles.portfolioSeeAll}>See all</Link>
        </MediaTextSection>
    </main>
);

export default Portfolio;
