import React from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import pomodoroLogo from '../images/logo-pomodoro.png';
import './productivity.css';

const PortfolioProductivity = () => {
    const breadcrumbItems = [
        {
            link: '/portfolio',
            label: 'Portfolio',
            isActive: false,
        },
        {
            link: '/productivity',
            label: 'Productivity',
            isActive: true,
        },
    ];

    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <h1>Productivity Tools</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula a mi non lobortis. Duis viverra augue ipsum, vel bibendum dui dapibus non. Nunc eget mollis est. Phasellus sit amet vehicula erat, nec volutpat urna. Nam bibendum ante vitae nibh volutpat, vel finibus enim ultricies. Maecenas ultricies augue sem, in condimentum enim semper in. Maecenas rutrum tristique efficitur.</p>
            <div className="productivity__container">
                <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/pomodoro/efoapnbagjjemkgaokccanejmefnfack?fbclid=IwAR1Q2CQsybAD-KucM7YFSHWzeQZIAmQPfhPLmstuwSqckWlzhm9-6dnvuzA" className="productivity__row">
                    <div className="productivity__contentImage__container">
                        <img src={pomodoroLogo} alt="Pomodoro" className="productivity__contentImage__image" />
                    </div>
                    <div className="productivity__contentText__container">
                        <h3>Pomodoro</h3>
                        <span className="productivity__contentText__category">Chrome Extension</span>
                        <p>This is a time management technique that aims to break your day into alternative intervals of work and break times.</p>
                    </div>
                </a>
            </div>
        </main>
    );
};

export default PortfolioProductivity;
