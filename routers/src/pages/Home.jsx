import { useState, useEffect } from "react"
import "./pages-css/Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const titles = ["Developer", "Designer", "Programmer"];
    const colors = ["#7de2d1", "#339989", "#fffafb"];

    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    useEffect(() => {
        const currentWord = titles[wordIndex];
        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, charIndex + 1));
                setCharIndex((a) => a + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setCharIndex(0);
                setWordIndex((wordIndex + 1) % titles.length);
                setDisplayedText("");
            }, 1500);
            return () => clearTimeout(pause);
        }
    }, [charIndex, wordIndex]);

    const Image_rotate = () => {
        setRotate(rotate + 360);
    };

    return (
        <div className="home-container" data-aos="fade-up">
            <div className="profile-container">
                <div className="intro">
                    <h1>Hi I'm </h1>
                    <h1 className="name">Harold</h1>
                </div>
                <div
                    className="profile-img"
                    onClick={Image_rotate}
                    style={{ transform: `rotate(${rotate}deg)` }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/Images/profile.JPG`}
                        alt="Profile"
                    />
                </div>
                <div className="typer-section">
                    <h1> I'm a </h1>
                    <h1
                        className="typer"
                        style={{ color: colors[wordIndex] }}
                    >
                        {displayedText}
                        <span className="cursor">|</span>
                    </h1>
                </div>
            </div>

            <div className="about-section" data-aos="fade-up">
                <div className="about-text">
                    <h2>About Me</h2>
                </div>
                <div className="about-paragraph">
                    <p>
                        I'm Harold, a passionate web developer who loves turning ideas into interactive and visually appealing websites. 
                        I enjoy working with modern technologies and continuously strive to improve my skills.
                    </p>
                </div>
            </div>

            <div className="skills-section" data-aos="fade-up">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/Images/html.png`} alt="HTML" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/Images/css-3.png`} alt="CSS" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/Images/js.png`} alt="JavaScript" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/Images/react.png`} alt="React" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/Images/github.png`} alt="GitHub" />
                    </li>
                </ul>
            </div>
        </div>
    );
}
