import {useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NotFound() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return(
        <div data-aos="fade-up">
        <h1>Page NOt Found</h1>
        </div>
    )
}