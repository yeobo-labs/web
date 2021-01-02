import { useState, useEffect } from "react";

type WindowSize = {
    width?: number;
    height?: number;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    } as WindowSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
