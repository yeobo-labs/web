import React from 'react';
import MediaTextSection from '../../components/layout/media-text-section';
import whoWeAreImg from './images/who-we-are.png';
import contactImg from './images/get-in-touch.png';

const About = () => {
    return (
        <main>
            <MediaTextSection heading="Who we are" imageSide="left" image={{ src: whoWeAreImg, alt: '' }}>
                <p>We're a couple trying to make a difference. Lol.</p>
                <p>Kidding aside, we're both developers who wish to create applications that would be beneficial to (hopefully) everyone. Most ideas arise from random spurs of the moment or out of need. There may be existing similar applications out there, however, we want to continously learn and what better way to do that than to try to make things ourselves.</p>
            </MediaTextSection>
            <MediaTextSection heading="Get in touch" imageSide="right" image={{ src: contactImg, alt: '' }}>
                <p>We'd love to here your feedback on our works. We can also cater project requests, if any. Send us an email at <a href="mailto:yeobolabs@gmail.com">yeobolabs@gmail.com</a>.</p>
            </MediaTextSection>
        </main>
    );
};

export default About;
