import React from 'react';
import './about.css';

const About = () => {
    return (
        <main>
            <div className="content__container">
                <h1>Who we are</h1>
                <p>We're a couple trying to make a difference. Lol.</p>
                <p>Kidding aside, we're both developers who wish to create applications that would be beneficial to (hopefully) everyone. Most ideas arise from random spurs of the moment or out of need. There may be existing similar applications out there, however, we want to continously learn and what better way to do that than to try to make things ourselves.</p>
            </div>
            <div className="content__container">
                <h1>Get in touch</h1>
                <p>We'd love to here your feedback on our works. We can also cater project requests, if any. Send us an email at <a href="mailto:yeobolabs@gmail.com">yeobolabs@gmail.com</a></p>
            </div>
        </main>
    );
};

export default About;
