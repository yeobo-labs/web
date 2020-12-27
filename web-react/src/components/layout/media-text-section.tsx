import React from 'react';
import { Media } from './render-media';
import './layout.css';
import './layout-animation.css';
import { Content, MediaTextSectionProps } from './render-content';

const MediaTextSection = (props: MediaTextSectionProps) => {
    const mediaContent = (<Media {...props} />);
    const textContent = (<Content {...props}/>);

    const first = props.mediaSide === 'left' ? mediaContent : textContent;
    const second = props.mediaSide === 'left' ? textContent : mediaContent;

    return (<div className="mediaTextSection__row">
        {first}
        {second}
    </div>);
};


export default MediaTextSection;
