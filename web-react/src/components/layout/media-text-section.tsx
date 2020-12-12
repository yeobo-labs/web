import React from 'react';
import { ImageProps } from '../../types/image';
import './layout.css';

type MediaTextSectionProps = {
    image: ImageProps;
    heading: string;
    children: React.ReactNode;
    imageSide: 'left' | 'right';
}

const MediaTextSection = ({ imageSide = 'left', ...props}: MediaTextSectionProps) => {
    const mediaContent = (<figure className="mediaTextSection__contentImage__container">
        <img {...props.image} className="mediaTextSection__contentImage__image" />
    </figure>);
    const textContent = (<div className={`mediaTextSection__contentText__container--${imageSide}`}>
        <h1 className="mediaTextSection__contentText__heading">{props.heading}</h1>
        <div className="mediaTextSection__contentText__content">
            {props.children}
        </div>
    </div>);

    const first = imageSide === 'left' ? mediaContent : textContent;
    const second = imageSide === 'left' ? textContent : mediaContent;

    return (<div className="mediaTextSection__row">
        {first}
        {second}
    </div>);
};

export default MediaTextSection;
