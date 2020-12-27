import React from "react";
import { ImageProps } from '../../types/image';
import { VideoProps } from '../../types/video';
import { observeIntersect } from "../../util";

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
        return (
            <figure className={`mediaTextSection__contentImage__container will-reveal ${this.state.revealed ? 'revealing revealed' : ''}`} ref={this.ref}>
                {this.props.video ? <video {...video} /> : (image ? <img {...image} alt={image.alt || ''} className="mediaTextSection__contentImage__image" /> : <div />)}
            </figure>
        );
    }
}