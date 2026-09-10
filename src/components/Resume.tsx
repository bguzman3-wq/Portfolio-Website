import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/Bryan_Ceballos-Guzman_Resume.pdf" download className="resume-link" aria-label="Download resume">
        <FaFileDownload />
        <span>Download Resume</span>
      </a>
    </section>
  );
}