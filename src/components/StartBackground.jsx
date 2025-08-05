import React, {useEffect, useState} from "react";

export const StartBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars()
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const new_stars = [];

        for (let i = 0; i < numberOfStars; i++) {
            new_stars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(new_stars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 6

        const new_meteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            new_meteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            })
        }
        setMeteors(new_meteors);
    }
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: star.size + "px",
                            height: star.size + "px",
                            left: star.x + "%",
                            top: star.y + "%",
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                        }}
                    />
                ))}
                {meteors.map((meteor) => (
                    <div
                        key={meteor.id}
                        className="meteor animate-meteor"
                        style={{
                            width: meteor.size * 50 + "px",
                            height: meteor.size * 3 + "px",
                            left: meteor.x + "%",
                            top: meteor.y + "%",
                            animationDelay: meteor.delay,
                            animationDuration: meteor.animationDuration + "s",
                        }}
                    />
                ))}
        </div>
    );
}
