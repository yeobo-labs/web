import React from 'react';
import { ImageProps } from '../../types/image';
import './link.css';

type PortfolioLinkProps = {
    image: ImageProps;
    href: string;
    heading: string;
    description: string;
    preheading?: string;
};

const PortfolioLink = (props: PortfolioLinkProps) => (
    <div className="portfolioLink__container">
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="portfolioLink__row">
            <div className="portfolioLink__contentImage__container">
                <img {...props.image} className="portfolioLink__contentImage__image" />
            </div>
            <div className="portfolioLink__contentText__container">
                <h3>{props.heading}</h3>
                {props.preheading && <span className="portfolioLink__contentText__category">{props.preheading}</span>}
                <p>{props.description}</p>
            </div>
        </a>
    </div>
);

export default PortfolioLink;
