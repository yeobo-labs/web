import React from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import werewolfLogo from '../images/logo-werewolf.png';
import './games.css';

const PortfolioGames = () => {
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

    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <h1>Fun &amp; Games</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula a mi non lobortis. Duis viverra augue ipsum, vel bibendum dui dapibus non. Nunc eget mollis est. Phasellus sit amet vehicula erat, nec volutpat urna. Nam bibendum ante vitae nibh volutpat, vel finibus enim ultricies. Maecenas ultricies augue sem, in condimentum enim semper in. Maecenas rutrum tristique efficitur.</p>
            <div className="games__container">
                <a target="_blank" rel="noopener noreferrer" href="https://project-werewolf.herokuapp.com/" className="games__row">
                    <div className="games__contentImage__container">
                        <img src={werewolfLogo} alt="Project Werewolf" className="games__contentImage__image" />
                    </div>
                    <div className="games__contentText__container">
                        <h3>Project Werewolf</h3>
                        <span className="games__contentText__category">Multiplayer Web Game</span>
                        <p>Werewolf is a game of deception and deduction you can play with all your friends! Goal is pretty simple - if you're on the good side, find out who the werewolves are while if you're on the bad side, eliminate as much good people as you could without leaving a clue.</p>
                    </div>
                </a>
            </div>
        </main>
    );
};

export default PortfolioGames;
