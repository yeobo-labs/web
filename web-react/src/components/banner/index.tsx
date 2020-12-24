import React from 'react';
import { ImageProps } from '../../types/image';
import './banner.css';

type BannerProps = {
    image: ImageProps;
};

const Banner = ({image}: BannerProps) => (
    <div className="bannerContainer">
        <figure className="bannerFigure">
            <img {...image} alt={image.alt || ''} />
        </figure>
        <div className="bannerOverlay" />
    </div>
);

export default Banner;
