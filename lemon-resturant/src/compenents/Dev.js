import React from 'react';
import profilePic from '../assets/lait-zet.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

export default function Dev() {
  return (
    <div className="dev-container">
      <div className="dev-card">
        {/* Left Side */}
        <div className="dev-left">
          <img src={profilePic} alt="Profile" className="dev-profile" />
          <h2>LAHCEN AIT ZETTA</h2>
          <p className="dev-title">Full-Stack Web Developer</p>
          <p className="dev-quote">"Code with purpose, design with passion."</p>

          <a
            href="/CV_LAHCEN.pdf" // make sure you place your CV in the public folder
            className="dev-cv-button"
            download
          >
            <FiDownload style={{ marginRight: '8px' }} />
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="dev-right">
          <h3>About Me</h3>
          <p>
            I'm a passionate web developer with expertise in React, backend development,
            and user-friendly UI/UX design. I love building scalable web applications
            that provide seamless user experiences.
          </p>

          <h3>Skills</h3>
          <div className="dev-skills">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Express.js</span>
          </div>

          <h3>Experience</h3>
          <ul className="dev-experience">
            <li>🚀 Built a responsive e-commerce platform using React & Node.js</li>
            <li>📊 Developed a real-time dashboard for data analytics</li>
            <li>🎨 Designed modern UI components with Tailwind & Bootstrap</li>
          </ul>

          <h3>Connect with Me</h3>
          <div className="dev-socials">
            <a href="https://github.com/Lhcenzetta" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://web.facebook.com/lhcen.ztta.3/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
