import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Media } from './render-media';
import { Content, MediaTextSectionProps } from './render-content';
import layoutStyles from './layout.module.css';

const MediaTextSection = (props: MediaTextSectionProps) => {
    const { width } = useWindowSize();
    const mediaSide = width && width <= 840 ? 'left' : props.mediaSide;

    if (!props.video && !props.image) {
        return <React.Fragment />;
    }

    const mediaContent = (<Media {...props} />);
    const textContent = (<Content {...props}/>);

    const first = mediaSide === 'left' ? mediaContent : textContent;
    const second = mediaSide === 'left' ? textContent : mediaContent;

    return (<div className={layoutStyles.mediaTextSectionRow}>
        {first}
        {second}
    </div>);
};

export default MediaTextSection;
