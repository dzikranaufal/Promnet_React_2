import {
    useState,
    useRef
} from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const originalText = "DZIKRA";

function Hero() {
    const [text, setText] = useState(originalText);
    const intervalRef = useRef(null);

    const handleMouseEnter = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setText(
                originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }

                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("")
            );

            if (iteration >= originalText.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 40);
    };

    return ( 
        <div className="hero">
        <h1
            className="headline"
            aria-label="Dzikra"
            onMouseEnter={handleMouseEnter}
        >
            {text.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
            ))}
        </h1>

        <p className="tagline">
            Passionate about creating secure, responsive, and intuitive digital
            experiences with a strong focus on performance, usability, and user
            needs.
        </p>
        </div>
    );
}

export default Hero;