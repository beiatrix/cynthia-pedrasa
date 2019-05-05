import React from 'react'
import "../styles/Projects.css"

const projects = [
  {
    name: 'rock paper scissors',
    subtitle: 'WEB BROWSER GAME',
    imageurl: 'https://i.imgur.com/34oDxJ2.jpg',
    url: 'https://beiatrix.github.io/code-sketches/pages/13-rps/rps.html',
    desc: 'Simple rock paper scissors game built with vanilla JavaScript.'
  },
  {
    name: 'game of life',
    subtitle: 'CELLULAR AUTOMATON',
    imageurl: 'https://i.imgur.com/35pHRAZ.jpg',
    url: 'https://beiatrix.github.io/code-sketches/pages/20-gameoflife/index.html',
    desc: "An in-browser implementation of Conway's Game of Life, made with pure HTML+CSS+JS."
  },
  {
    name: 'css resume',
    subtitle: 'LAYOUT DESIGN',
    imageurl: 'https://i.imgur.com/wPdZ08z.png',
    url: 'https://beiatrix.github.io/code-sketches/pages/06-resume/resume.html',
    desc: 'A minimal resume design made with pure CSS and media queries - no frameworks here.'
  },

]


export const Projects = () => {
  return (
    <div id="projects-section">
      <h1 id="projects-heading">projects</h1>
      <div id="projects">
        {
          projects.map((project, idx) => {
            return (
              <section className="project-container" key={`project-${idx}`}>
                <div className="project-img">
                  <a href={project.url} target="_blank">
                    <img src={project.imageurl} alt={project.name} />
                  </a>
                </div>
                <div className="project-desc">
                  <div className="project-text">
                    <a href={project.url} target="_blank">
                      <h1>{project.name}</h1>
                    </a>
                    <h4>{project.subtitle}</h4>
                    <div className="project-gradient"></div>
                    <div className="gradientBar" />
                    <h2><a href={project.url} target="_blank">{project.displayurl}</a></h2>
                    <p>{project.desc}</p>
                  </div>
                </div>
              </section>
            )
          })
        }
      </div>
    </div>
  )
}