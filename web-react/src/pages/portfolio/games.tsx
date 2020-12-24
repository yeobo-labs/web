import React from 'react';
import Banner from '../../components/banner';
import Breadcrumbs from '../../components/breadcrumbs';
import PortfolioLink from '../../components/link/portfolio-link';
import banner from './images/banner-games.jpg';
import { GamesData as Data } from './data';

const PortfolioGames = () => {
    return (
        <main>
            <Breadcrumbs items={Data.breadcrumbs} />
            <h1>Fun &amp; Games</h1>
            <Banner image={{ src: banner, alt: '' }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula a mi non lobortis. Duis viverra augue ipsum, vel bibendum dui dapibus non. Nunc eget mollis est. Phasellus sit amet vehicula erat, nec volutpat urna. Nam bibendum ante vitae nibh volutpat, vel finibus enim ultricies. Maecenas ultricies augue sem, in condimentum enim semper in. Maecenas rutrum tristique efficitur.</p>
            {Data.items.map((item, index) => (<PortfolioLink key={index} {...item} />))}
        </main>
    );
};

export default PortfolioGames;
