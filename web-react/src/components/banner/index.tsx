import React from 'react';
import { ImageProps } from '../../types/image';
import styles from './banner.module.css';

type BannerProps = {
    image: ImageProps;
};

const Banner = ({image}: BannerProps) => (
    <div className={styles.bannerContainer}>
        <figure className={styles.bannerFigure}>
            <img {...image} alt={image.alt || ''} />
        </figure>
        <div className={styles.bannerOverlay} />
    </div>
);

export default Banner;
