import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contacts(){
    return(
        <section>
            <h2>Contacts</h2>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/bryan-ceballos-guzman-513293296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/bguzman3-wq" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>

        </section>
    );
}