import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './pages-css/About.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="About-holder" data-aos="fade-up">
      <div className="intro-section">
        <div className="text-block">
          <h1>Hi, my name is <span className="">Harold V. Veleña</span>, a BSIT student that loves to learn and explore</h1>
          <h1>I am the jack of all trades in various programming languages, though I haven't mastered any (yet)</h1>
          <h1>I love to study various programming languages and creating ideas into reality</h1>
          <h1>I'm currently looking for ways to gain more knowledge and collaborate on real-life projects</h1>
        </div>
        <div className="image-block">
          <img src="/Images/me.png" alt="Harold V. Veleña" />
        </div>
      </div>
    </div>
  );
}
