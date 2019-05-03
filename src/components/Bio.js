import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Bio.css'

export const Bio = () => {
  return (
    <Container id="about" >
      <Row className="justify-content-md-center align-items-center">

        <Col md="5" >
          <div id="bioimg">
            {/* https://ibb.co/KbH1YtJ */}
            <img id="headshot" src="https://i.ibb.co/XjTw9nq/cynthia-pedrasa.jpg" alt="beiatrix" />
          </div>
        </Col>
        <Col lg="7" >
          <div id="biotext">

            <h1>Hello!</h1>
            <h1>I'm <span className="highlight">Cynthia.</span></h1>
            <br />
            <p id="tag">
              I am a Registered Nurse working as a Clinical Informatics Specialist at Northwell Health. Computers, information science, and their applications in the healthcare setting have always fascinated me.
        </p>
          </div>
        </Col>

      </Row>

      <Row>
        <Col>

          <p>
            Before there were electronic medical records at my very first job, I remember having yellow post-it notes on the front of patient chart binders to remind the nurses when the patient’s next assessment was due and the other tasks associated for continuity of service. These post-its were taped onto the chart binder and would always fall off the charts. I was frustrated and thought that there must be a better way to track and report this administrative information. I taught myself MS Excel to organize my patient’s data and be able to track patient visits, provider information, immunizations, and other details to speed up administrative work and reporting to give me more time for the more important task, which is direct patient care. Later, my spreadsheets were being imported by the IT Department into the financial system (clinical systems were still not implemented at that time) to speed up billing.
        </p>

          <p>
            My real Nursing Informatics career started in the late 1990s when I participated in my organization’s electronic medical record (EMR) implementation and working with the IT Department in developing software solutions to improve tracking and reporting patient care outcomes in various quality measures. I have been involved in multiple system conversions and my knowledge of the business process and data understanding had been very valuable tools in project implementations.
        </p>
          <p>
            In all of my years of healthcare experience, data has always been important in any decision I make, most especially in my current position, where my projects rely on my organization’s health information exchange as a data source. The constant need for speed in data retrieval to be able to measure and to make informed decisions had me looking for faster ways of data retrieval than Excel. I am self-taught in most applications like SQL, SQL Server Integration Services, Crystal Reports, and Tableau, which have helped me tremendously. Being able to extract data from databases myself without waiting for a technical resource to do it for me has its many advantages.
        </p>
          <p>
            But my learning did not stop there, as I was also interested to understand different standards on how data is exchanged, and their protocols for transfer. I have been involved in several healthcare and billing integrations, and have benefited from experiencing how health information exchange works. I’ve learned so much not only from technical interoperability, but also the varied nuances of data, normalization needs, and application of healthcare data standards to achieve semantic interoperability have afforded me a wealth of experience. With this sea of data at my disposal, I feel I can do more than just run simple data analyses and basic statistical measures.
        </p>
          <p>
            I currently enrolled in a data science bootcamp to gain the knowledge and advanced level of skills needed to work on the enterprise data warehouse and health information exchange to provide solutions that will lead to better outcomes for my Health System’s patients. I am bolstering my skill set by learning programming, advanced statistics, and the new tools needed to dive deep into data and transform it into meaningful information that will help improve informed decision-making and problem solving.
        </p>
        </Col>
      </Row>
    </Container>
  )
}