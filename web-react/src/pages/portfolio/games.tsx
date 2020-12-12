import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import PortfolioLink from '../../components/link/portfolio_link';
import werewolfLogo from './images/logo-werewolf.png';

const breadcrumbItems = [
    {
        link: '/portfolio',
        label: 'Portfolio',
        isActive: false,
    },
    {
        link: '/fun-games',
        label: 'Fun & Games',
        isActive: true,
    },
];

const gameItems = [
    {
        heading: 'Project Werewolf',
        preheading: 'Multiplayer Web Game',
        description: 'Werewolf is a game of deception and deduction you can play with all your friends! Goal is pretty simple - if you\'re on the good side, find out who the werewolves are while if you\'re on the bad side, eliminate as much good people as you could without leaving a clue.',
        href: 'https://project-werewolf.herokuapp.com/',
        image: {
            src: werewolfLogo,
            alt: 'Project Werewolf'
        },
    },
]

const PortfolioGames = () => {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <h1>Fun &amp; Games</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula a mi non lobortis. Duis viverra augue ipsum, vel bibendum dui dapibus non. Nunc eget mollis est. Phasellus sit amet vehicula erat, nec volutpat urna. Nam bibendum ante vitae nibh volutpat, vel finibus enim ultricies. Maecenas ultricies augue sem, in condimentum enim semper in. Maecenas rutrum tristique efficitur.</p>
            {gameItems.map((item, index) => (<PortfolioLink key={index} {...item} />))}
        </main>
    );
};

export default PortfolioGames;
