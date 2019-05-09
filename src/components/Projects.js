import React from 'react'
import "../styles/Projects.css"

const projects = [
  {
    name: 'exploratory data analysis',
    // subtitle: 'WEB BROWSER GAME',
    // https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
    imageurl: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    url: 'https://beiatrix.github.io/code-sketches/pages/13-rps/rps.html',
    desc: 'Using the OSEMN framework, this project will go through the Data Science phases to get, clean, explore, model, and interpret a dataset using multivariate linear regression to predict the sale price of houses as accurately as possible.'
  },
  // {
  //   name: 'game of life',
  //   subtitle: 'CELLULAR AUTOMATON',
  //   imageurl: 'https://i.imgur.com/35pHRAZ.jpg',
  //   url: 'https://beiatrix.github.io/code-sketches/pages/20-gameoflife/index.html',
  //   desc: "An in-browser implementation of Conway's Game of Life, made with pure HTML+CSS+JS."
  // },
  // {
  //   name: 'css resume',
  //   subtitle: 'LAYOUT DESIGN',
  //   imageurl: 'https://i.imgur.com/wPdZ08z.png',
  //   url: 'https://beiatrix.github.io/code-sketches/pages/06-resume/resume.html',
  //   desc: 'A minimal resume design made with pure CSS and media queries - no frameworks here.'
  // }
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
      <p id="wip">More data science projects coming soon!</p>
    </div>
  )
}