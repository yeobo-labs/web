import classNames from "classnames";
import React from "react";
import { observeIntersect } from "../../util";
import { MediaTextSectionMediaProps } from "./render-media";
import layoutStyles from './layout.module.css';
import animationStyles from './layout-animation.module.css';

export type MediaTextSectionProps = MediaTextSectionMediaProps & {
    heading: string;
    children: React.ReactNode;
    mediaSide: 'left' | 'right';
}

export class Content extends React.Component<Omit<MediaTextSectionProps, 'image' | 'video'>> {
    observer?: IntersectionObserver;
    ref = React.createRef<any>();
    
    render() {
        const classes = classNames(layoutStyles[`mediaTextSectionContentTextContainer${this.props.mediaSide}`],
            animationStyles.willReveal);
        return (
            <div className={classes} ref={this.ref}>
                <h1 className={layoutStyles.mediaTextSectionContentTextHeading}>{this.props.heading}</h1>
                <div className={layoutStyles.mediaTextSectionContentTextContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
    componentDidMount() {
        if(this.ref?.current) {
            this.observer = observeIntersect(this.ref.current, () => {
                setTimeout(() => {
                    this.ref.current?.classList.add(animationStyles.revealing)
                    setTimeout(() => {
                        this.ref.current?.classList.add(animationStyles.revealed)
                    }, 600);
                }, 300);
            })
        }
    }

    componentWillUnmount() {
        this.observer?.disconnect();
    }
}
