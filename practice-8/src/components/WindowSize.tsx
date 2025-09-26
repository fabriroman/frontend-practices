import { useState, useEffect } from "react";


export const WindowSize = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (width === 0 || height === 0) {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <h1>Exercise 2</h1>
            <p>Current window size: {width} x {height}</p>
        </div>
    );
};