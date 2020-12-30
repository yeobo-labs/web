import React from "react";
import { observeIntersect } from "../../util";
import { MediaTextSectionMediaProps } from "./render-media";

export type MediaTextSectionProps = MediaTextSectionMediaProps & {
    heading: string;
    children: React.ReactNode;
    mediaSide: 'left' | 'right';
}
export class Content extends React.Component<Omit<MediaTextSectionProps, 'image' | 'video'>> {
    observer?: IntersectionObserver;
    ref = React.createRef<any>();
    
    render() {
        return (
            <div className={`mediaTextSection__contentText__container--${this.props.mediaSide} will-reveal`} ref={this.ref}>
                <h1 className="mediaTextSection__contentText__heading">{this.props.heading}</h1>
                <div className="mediaTextSection__contentText__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
    componentDidMount() {
        if(this.ref?.current) {
            this.observer = observeIntersect(this.ref.current, () => {
                setTimeout(() => {
                    this.ref.current?.classList.add('revealing')
                    setTimeout(() => {
                        this.ref.current?.classList.add('revealed')
                    }, 600);
                }, 300);
            })
        }
    }

    componentWillUnmount() {
        this.observer?.disconnect();
    }
}

