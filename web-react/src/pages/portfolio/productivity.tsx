import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import PortfolioLink from '../../components/link/portfolio_link';
import pomodoroLogo from './images/logo-pomodoro.png';

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

const productivityItems = [
    {
        heading: 'Pomodoro',
        preheading: 'Chrome Extension',
        description: 'This is a time management technique that aims to break your day into alternative intervals of work and break times.',
        href: 'https://chrome.google.com/webstore/detail/pomodoro/efoapnbagjjemkgaokccanejmefnfack?fbclid=IwAR1Q2CQsybAD-KucM7YFSHWzeQZIAmQPfhPLmstuwSqckWlzhm9-6dnvuzA',
        image: {
            src: pomodoroLogo,
            alt: 'Pomodoro'
        },
    },
];

const PortfolioProductivity = () => {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <h1>Productivity Tools</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula a mi non lobortis. Duis viverra augue ipsum, vel bibendum dui dapibus non. Nunc eget mollis est. Phasellus sit amet vehicula erat, nec volutpat urna. Nam bibendum ante vitae nibh volutpat, vel finibus enim ultricies. Maecenas ultricies augue sem, in condimentum enim semper in. Maecenas rutrum tristique efficitur.</p>
            {productivityItems.map((item, index) => (<PortfolioLink key={index} {...item} />))}
        </main>
    );
};

export default PortfolioProductivity;
