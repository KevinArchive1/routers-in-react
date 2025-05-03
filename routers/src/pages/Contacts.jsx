import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./pages-css/Contacts.css";

export default function Contacts() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="contacts-container" data-aos="fade-up">
            <h1 className="contact-title">Let's Connect</h1>
            <p className="contact-subtitle">
                Got a project or just want to say hi? Feel free to reach out.
            </p>

            <div className="contact-content">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact-info">
                    <h2>Contact Details</h2>
                    <p><strong>Email:</strong> harold@gmail.com</p>
                    <p><strong>Phone:</strong> +63 912 345 6789</p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src="/Images/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                            <img src="/Images/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="/Images/instagram.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
