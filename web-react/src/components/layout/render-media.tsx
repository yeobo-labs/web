import classNames from "classnames";
import React from "react";
import { ImageProps } from '../../types/image';
import { VideoProps } from '../../types/video';
import { observeIntersect } from "../../util";
import layoutStyles from './layout.module.css';
import animationStyles from './layout-animation.module.css';

export type MediaTextSectionMediaProps = {
    image?: ImageProps;
    video?: VideoProps;
}

export class Media extends React.Component<MediaTextSectionMediaProps, { revealed: boolean }> {
    observer?: IntersectionObserver;
    ref = React.createRef<any>();
    constructor(props: MediaTextSectionMediaProps) {
        super(props);
        this.state = {
            revealed: false
        };
    }
    componentDidMount() {
        if (this.ref && this.ref.current) {
            this.observer = observeIntersect(this.ref.current, () => {
                this.setState({ ...this.state, revealed: true });
            });
        }
    }
    componentWillUnmount() {
        this.observer?.disconnect();
    }
    render() {
        const { video, image } = this.props;

        const classes = classNames(layoutStyles.mediaTextSectionContentMediaContainer,
            animationStyles.willReveal, {
                [animationStyles.revealing]: this.state.revealed,
                [animationStyles.revealed]: this.state.revealed
            })
        return (
            <figure className={classes} ref={this.ref}>
                {video
                    ? <video {...video} />
                    : (image
                        ? <img {...image} alt={image.alt || ''} />
                        : <div />)
                }
            </figure>
        );
    }
}
