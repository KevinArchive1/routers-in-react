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
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
    )
}