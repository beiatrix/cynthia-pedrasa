import React, {Component} from 'react'
import {ExpItem} from './ExpItem'

const expData = [
  {
    company: "Northwell Health",
    role: "Information Architect - Health Information Exchange",
    date: "August 2015 - Present",
    length: "6 years 9 months",
    location: "Melville, NY",
    details: [
      "Managed the Health System's Clinical Viewer (CV) product, the platform for end users to interact with the Health Information Exchange and coordinated CV integration with the health system's enterprise inpatient, outpatient, emergency EMRs, physician management systems as well as other specialized EMRs",
      "Provided requirements for CV display of HIE information and validated normalization of values in diagnoses, procedures, lab results, and other infotypes to provide meaningful and standardized display of information to the clinicians",
      "Conducted POC on visualization of Congestive Heart Failure condition from the patient's comprehensive longitudinal record and built the ontology to display the flow sheet/graphs for CHF's related terminologies for medications, observations, lab results, comorbidities and complications",
      "Completed ICD-10 remediation of the Care Management application/solution for the Value-based, Population Health and Bundled payment programs",
      "Led the design/development of the Comprehensive Joint Replacement (CJR) bundled payment solution to comply with CMS' 4/1/2016 mandatory implementation",
      "Designed CJR algorithms for early identification of lower extremity joint replacement through integration of information from various registrations, emrs, surgical scheduling systems, billing and payment systems across14 Northwell hospitals to help initiate patient interventions prior to admission for better patient outcomes",
      "Managed product design for Population Health Tasking feature and Medication list feature that interfaces with the hospitals health information exchange to integrate medications from inpatient, outpatient/ambulatory, and regional health information systems to assist the Care Navigators in the medication review during the transition of care, complex care management, and long term care to support the value-based programs (Bundled programs, Health Home, Practice-based care management, and Insurance/Managed care)"
    ]
  }
]

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exp: expData
    }
  }

  render() {
    const {exp} = this.state
    return (
      <section>
        <h1>Experience</h1>
        {
          exp.map((item, idx) => {
            return (
              <ExpItem key={`exp-${idx}`} data={item} />
            )
          })
        }
      </section>
    )
  }
}