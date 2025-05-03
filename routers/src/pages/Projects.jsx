import {useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./pages-css/Projects.css"

export default function Projects() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const projects = [
        {
            image:"/Images/prog1.png",
            title: "Simple Dice Roller",
            link: "https://kevinarchive1.github.io/Simple-Dice-Roller/" ,
            description: "A simple probability game created using JavaScript. Using three dice to display different outcomes"
        },
        {
            image: "/Images/prog2.png",
            title: "Brother Jhonny's Promotion Website", 
            link: "https://kevinarchive1.github.io/",
            description: "A promotional website for a simple fast food shop, exploring different flavors and serving coffee with a smile. Featuring the best chicken in Lucena."
        },
        {
            image: "/Images/prog3.png", 
            title: "Simple To-Do-List in React",
            link: "https://kevinarchive1.github.io/itp-webdev-todolist/",
            description: "A to-do list application built with React, showcasing the fundamentals of CRUD operations."
        },
        {
            image: "/Images/prog4.png", 
            title: "Simple Library with API in React",
            link: "https://keviinarchivepagination.netlify.app/",
            description: "A React-based application that simulates a library system, demonstrating how to fetch and display data from an external API with CRUD capabilities."
        },
        {
            image: "/Images/prog5.png", 
            title: "MIS Simulation in HTML",
            link: "https://kevinarchive1.github.io/Student-Enrolment-Forms.github.io/",
            description: "A Management Information System simulation built using HTML and CSS, illustrating user navigation and static content layout for administrative interfaces."
        }
        
    ]

    return(
        <div className="projects-container" data-aos="fade-up">
            <main>
                <img className="main-img" src="/Images/prog-current.png" alt="none" />
                <h1 className="">A Complex Music Player React</h1>
                <p className="">on going projeact</p>
            </main>
            <h1>Other Projects</h1>
            <div className="project-holder" >
                {projects.map((projects, index) => (
                    <div key={index} className="individual-project" data-aos="fade-up">
                        <img className="projects-img" src={projects.image} alt="" />
                        <h1 className="">
                            {projects.title}
                        </h1>
                        <p className="">{projects.description}</p>
                        <a href={projects.link} target="_blank">
                            <button className="">Visit Website</button>
                        </a>  
                    </div>
                ))}
            </div>
        </div>
    );
};