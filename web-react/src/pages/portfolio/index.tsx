import React from 'react';
import { Link } from 'react-router-dom';
import productivityImage from './images/productivity.png';
import gamesImage from './images/games.png';
import './portfolio.css';

const Portfolio = () => (
  <main>
    <div className="portfolio__row">
      <figure className="portfolio__contentImage__container">
        <img src={productivityImage} alt="Productivity" className="portfolio__contentImage__image" />
      </figure>
      <div className="portfolio__contentText__container--right">
        <h1 className="portfolio__contentText__heading">Productivity</h1>
        <div className="portfolio__contentText__content">
          <p>Tools that can boost your productivity, no matter what you do.</p>
          <Link to="/portfolio/productivity" className="portfolio__contentText__content--seeAll">See all</Link>
        </div>
      </div>
    </div>
    <div className="portfolio__row">
      <div className="portfolio__contentText__container--left">
        <h1 className="portfolio__contentText__heading">Fun & Games</h1>
        <div className="portfolio__contentText__content">
          <p>Fight boredom with some fun games to play with your friends.</p>
          {/* <a href="#" className="portfolio__contentText__content--seeAll">See all</a> */}
        </div>
      </div>
      <figure className="portfolio__contentImage__container">
        <img src={gamesImage} alt="Fun and Games" className="portfolio__contentImage__image" />
      </figure>
    </div>
  </main>
);

export default Portfolio;
