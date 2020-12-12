import React from 'react';
import { Link } from 'react-router-dom';
import MediaTextSection from '../../components/layout/media-text-section';
import productivityImage from './images/productivity.png';
import gamesImage from './images/games.png';
import './portfolio.css';

const Portfolio = () => (
    <main>
        <MediaTextSection heading="Productivity" imageSide="right" image={{ src: productivityImage, alt: 'Productivity' }}>
            <p>Tools that can boost your productivity, no matter what you do.</p>
            <Link to="/portfolio/productivity" className="portfolio__contentText__content--seeAll">See all</Link>
        </MediaTextSection>
        <MediaTextSection heading="Fun &amp; Games" imageSide="left" image={{ src: gamesImage, alt: 'Fun and Games' }}>
            <p>Fight boredom with some fun games to play with your friends.</p>
            <Link to="/portfolio/fun-games" className="portfolio__contentText__content--seeAll">See all</Link>
        </MediaTextSection>
    </main>
);

export default Portfolio;
