import pomodoroLogo from './images/logo-pomodoro.png';
import werewolfLogo from './images/logo-werewolf.png';

export const GamesData = {
    breadcrumbs: [
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
    ],
    items: [
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
    ],
};

export const ProductivityData = {
    breadcrumbs: [
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
    ],
    items: [
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
    ],
};
