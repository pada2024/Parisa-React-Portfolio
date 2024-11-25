import { useLocation } from 'react-router-dom';
import React from 'react';

function Footer() {
  const currentPage = useLocation().pathname;

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/pada2024"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/p-d-747436186/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      <p>Copyright &copy; {new Date().getFullYear()} Parisa React Portfolio</p>
      <p>Parisa Daily</p>
      <div>
        {icons.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
            <i className={icon.name}></i>
          </a>
        ))}
      </div>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
      )}
      <p>Current Page: {currentPage}</p>

    </footer>
  );
}

export default Footer;
