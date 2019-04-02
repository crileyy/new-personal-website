import React from 'react';
import './Header.css';
import headshot from '../images/headshot.JPG';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';
import Email from '../images/Email.png';
import Document from '../images/Document.png';

export const Header = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img className="headshot" src={headshot} alt="headshot" />
        <h1 className="name">Colin Riley</h1>
        <h4>Software Developer and Student</h4>
        <div className="links">
          <div className="link-header 1">
            <span className="link-header-text 1">GitHub</span>
            <a href="https://github.com/crileyy">
              <img src={GitHub} alt="github" className="git-logo" />
            </a>
          </div>
          <div className="link-header 2">
            <span className="link-header-text 2">LinkedIn</span>
            <a href="https://www.linkedin.com/in/colin-riley/">
              <img src={LinkedIn} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
          <div className="link-header 3">
            <span className="link-header-text 3">Email</span>
            <a href="mailto:riley.colin5@husky.neu.edu">
              <img src={Email} alt="email" className="email-logo" />
            </a>
          </div>
          <div className="link-header 4">
            <span className="link-header-text 4">Resume</span>
            <a href="https://crileyy.github.io/img/Colin_Riley_Resume.pdf">
              <img src={Document} alt="doc" className="document-logo" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
