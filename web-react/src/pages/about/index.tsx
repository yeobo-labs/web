import React from 'react';
import whoWeAreImg from './images/who-we-are.png';
import contactImg from './images/get-in-touch.png';
import './about.css';

const About = () => {
    return (
        <main>
            <div className="about__row">
                <div className="about__contentText__container--left">
                    <h1 className="about__contentText__heading">Who we are</h1>
                    <div className="about__contentText__content">
                        <p>We're a couple trying to make a difference. Lol.</p>
                        <p>Kidding aside, we're both developers who wish to create applications that would be beneficial to (hopefully) everyone. Most ideas arise from random spurs of the moment or out of need. There may be existing similar applications out there, however, we want to continously learn and what better way to do that than to try to make things ourselves.</p>
                    </div>
                </div>
                <figure className="about__contentImage__container">
                    <img src={whoWeAreImg} alt="Who we are" className="about__contentImage__image" />
                </figure>
            </div>
            <div className="about__row">
                <figure className="about__contentImage__container">
                    <img src={contactImg} alt="Get in touch" className="about__contentImage__image" />
                </figure>
                <div className="about__contentText__container--right">
                    <h1 className="about__contentText__heading">Get in touch</h1>
                    <div className="about__contentText__content">
                    <p>We'd love to here your feedback on our works. We can also cater project requests, if any. Send us an email at <a href="mailto:yeobolabs@gmail.com">yeobolabs@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
