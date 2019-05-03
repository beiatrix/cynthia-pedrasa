import React from 'react'
import "../styles/Footer.css"

export const Footer = () => {
  return (
    <footer id="contact">
      <h1>say hello!</h1>

      {/* <h2>say hello!</h2> */}

      {/* socials */}
      <a href="https://www.linkedin.com/in/beiatrix/" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="mailto:beiatrixmgmt@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.github.com/beiatrix/" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/beiatrix/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>

      <div id="copyright">
        <p>© website designed + built by beiatrix pedrasa 2019</p>
      </div>
    </footer>
  )
}