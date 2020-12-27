import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ImageProps } from '../../types/image';
import { VideoProps } from '../../types/video';
import './layout.css';

type MediaTextSectionMediaProps = {
    image?: ImageProps;
    video?: VideoProps;
}

type MediaTextSectionProps = MediaTextSectionMediaProps & {
    heading: string;
    children: React.ReactNode;
    mediaSide: 'left' | 'right';
}

const renderMedia = ({video, image}: MediaTextSectionMediaProps) => (
    <figure className="mediaTextSection__contentImage__container">
        {video
            ? <video {...video} />
            : <img {...image} alt={image!.alt || ''} className="mediaTextSection__contentImage__image" />}
    </figure>
);

const renderContent = (props: Omit<MediaTextSectionProps, 'image' | 'video'>) => (
    <div className={`mediaTextSection__contentText__container--${props.mediaSide}`}>
        <h1 className="mediaTextSection__contentText__heading">{props.heading}</h1>
        <div className="mediaTextSection__contentText__content">
            {props.children}
        </div>
    </div>
);

const MediaTextSection = (props: MediaTextSectionProps) => {
    const { width } = useWindowSize();
    const mediaSide = width && width <= 1240 ? 'left' : props.mediaSide;

    if (!props.video && !props.image) {
        return <React.Fragment />;
    }

    const mediaContent = renderMedia(props);
    const textContent = renderContent(props);

    const first = mediaSide === 'left' ? mediaContent : textContent;
    const second = mediaSide === 'left' ? textContent : mediaContent;

    return (<div className="mediaTextSection__row">
        {first}
        {second}
    </div>);
};

export default MediaTextSection;
