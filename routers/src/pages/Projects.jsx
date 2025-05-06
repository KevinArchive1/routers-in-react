import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./pages-css/Projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projects = [
    {
      image: `${process.env.PUBLIC_URL}/Images/prog1.png`,
      title: "Simple Dice Roller",
      link: "https://kevinarchive1.github.io/Simple-Dice-Roller/",
      description: "A simple probability game created using JavaScript. Using three dice to display different outcomes"
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/prog2.png`,
      title: "Brother Jhonny's Promotion Website",
      link: "https://kevinarchive1.github.io/",
      description: "A promotional website for a simple fast food shop, exploring different flavors and serving coffee with a smile. Featuring the best chicken in Lucena."
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/prog3.png`,
      title: "Simple To-Do-List in React",
      link: "https://kevinarchive1.github.io/itp-webdev-todolist/",
      description: "A to-do list application built with React, showcasing the fundamentals of CRUD operations."
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/prog4.png`,
      title: "Simple Library with API in React",
      link: "https://keviinarchivepagination.netlify.app/",
      description: "A React-based application that simulates a library system, demonstrating how to fetch and display data from an external API with CRUD capabilities."
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/prog 5.png`,
      title: "MIS Simulation in HTML",
      link: "https://kevinarchive1.github.io/Student-Enrolment-Forms.github.io/",
      description: "A Management Information System simulation built using HTML and CSS, illustrating user navigation and static content layout for administrative interfaces."
    }
  ];

  return (
    <div className="projects-container" data-aos="fade-up">
      <main>
        <img className="main-img" src={`${process.env.PUBLIC_URL}/Images/prog-current.png`} alt="Main Project" />
        <h1>A Complex Music Player React</h1>
        <p>Ongoing project</p>
      </main>
      <h1>Other Projects</h1>
      <div className="project-holder">
        {projects.map((project, index) => (
          <div key={index} className="individual-project" data-aos="fade-up">
            <img className="projects-img" src={project.image} alt={project.title} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button>Visit Website</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
