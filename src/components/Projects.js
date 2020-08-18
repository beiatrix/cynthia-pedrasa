import React from 'react'
import "../styles/Projects.css"

const projects = [
  {
    name: 'exploratory data analysis',
    imageurl: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    url: 'http://cynthiapedrasa.github.io/module-1-final-project',
    desc: 'Using the OSEMN framework, this project will go through the Data Science phases to get, clean, explore, model, and interpret a dataset using multivariate linear regression to predict the sale price of houses as accurately as possible.'
  },
  {
    name: 'statistical analysis',
    //imageurl: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    url: 'https://cynthiapedrasa.github.io/module-2-statistical_analysis_project/',
    desc: `For this project, I used the Northwind database--a free, open-source dataset created by Microsoft containing data from a fictional company. The goal of this project is to test the student's ability to gather information from a real-world database and use the knowledge of statistical analysis and hypothesis testing to generate analytical insights to answer the following question: Does discount amount have a statistically significant effect on the quantity of a product in an order? If so, at what level(s) of discount?`
  },
  {
    name: 'time-series analysis',
    //imageurl: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    url: 'https://cynthiapedrasa.github.io/time-series-analysis/',
    desc: `Using Time-Series Modeling, we're going to forecast real estate prices of various zipcodes using data from [Zillow](https://www.zillow.com/research/data/).   The question we are trying to answer as a consultant in the Real-Estate Investment Firm is as follows:
    "What are the top 5 zip codes nationwide with the highest Return on Investment (ROI) in 5 years that are within accepted standard deviation threshold (low volatility or variability in returns)?" 
    The dataset provides the monthly average house sales price nationwide
    from April 1996 to April 2018 or just under 10 years of data.`
  },
  {
    name: 'predicting 30-day readmisssion risk of patients with diabetes',
    //imageurl: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    url: 'https://cynthiapedrasa.github.io/predicting-30-day-readmission/',
    desc: `Binary Classification project on predicting 30-day Readmisssion Risk of patients with Diabetes`
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
                {
                  project.imageurl &&
                  <div className="project-img">
                    <a href={project.url} target="_blank">
                      <img src={project.imageurl} alt={project.name} />
                    </a>
                  </div>
                }
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