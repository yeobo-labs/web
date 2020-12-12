import React from 'react';
import { ImageProps } from '../../types/image';
import './layout.css';

type MediaTextSectionProps = {
    image: ImageProps;
    heading: string;
    children: React.ReactNode;
    imageSide: 'left' | 'right';
}

const renderImage = (image: ImageProps) => (
    <figure className="mediaTextSection__contentImage__container">
        <img {...image} alt={image.alt || ''} className="mediaTextSection__contentImage__image" />
    </figure>
);

const renderContent = (props: Omit<MediaTextSectionProps, 'image'>) => (
    <div className={`mediaTextSection__contentText__container--${props.imageSide}`}>
        <h1 className="mediaTextSection__contentText__heading">{props.heading}</h1>
        <div className="mediaTextSection__contentText__content">
            {props.children}
        </div>
    </div>
);

const MediaTextSection = (props: MediaTextSectionProps) => {
    const mediaContent = renderImage(props.image);
    const textContent = renderContent(props);

    const first = props.imageSide === 'left' ? mediaContent : textContent;
    const second = props.imageSide === 'left' ? textContent : mediaContent;

    return (<div className="mediaTextSection__row">
        {first}
        {second}
    </div>);
};

export default MediaTextSection;
