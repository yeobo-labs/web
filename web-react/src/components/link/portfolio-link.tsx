import React from 'react';
import { ImageProps } from '../../types/image';
import styles from './link.module.css';

type PortfolioLinkProps = {
    image: ImageProps;
    href: string;
    heading: string;
    description: string;
    preheading?: string;
};

const PortfolioLink = (props: PortfolioLinkProps) => (
    <div className={styles.portfolioLinkContainer}>
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={styles.portfolioLinkRow}>
            <div className={styles.portfolioLinkContentImageContainer}>
                <img {...props.image} alt={props.image.alt || ''} />
            </div>
            <div className={styles.portfolioLinkContentTextContainer}>
                <h3>{props.heading}</h3>
                {props.preheading && <span className={styles.portfolioLinkContentTextCategory}>{props.preheading}</span>}
                <p>{props.description}</p>
            </div>
        </a>
    </div>
);

export default PortfolioLink;
