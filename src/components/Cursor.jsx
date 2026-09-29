import { useEffect, useRef } from "react";

function Cursor() {
    const cursorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        let animationFrame;

        const animate = () => {
            current.current.x +=
                (mouse.current.x - current.current.x) * 0.15;

            current.current.y +=
                (mouse.current.y - current.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `
                    translate3d(
                        ${current.current.x}px,
                        ${current.current.y}px,
                        0
                    )
                `;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return <div ref={cursorRef} className="negative-cursor" />;
}

export default Cursor;