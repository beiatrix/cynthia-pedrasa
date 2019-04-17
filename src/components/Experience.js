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
  },
  {
    company: "CenterLight Healthcare (formerly CCM)",
    role: "Nurse Informatics Manager",
    date: "June 2009 - July 2012",
    length: "3 years 2 months",
    location: "?",
    details: [
      "Business Lead for the Medical Management Care Transitions project, which reduced avoidable hospital readmissions by > 2%",
      "Successfully eliminated backlog in paper-based standardized assessments through process reengineering with 85% improvement in assessment sequencing and 69% reduction in late assessments, improving regulatory compliance over a period of 12 months",
      "Developed SQL queries/stored procedures to support performance improvement efforts. Automated key performance indicator reports through SQL integration services and analysis services",
      "Managed a team of Data Entry Operators and Informatics Nurse",
      "Managed all aspects of software design, testing, training, and implementation of clinical assessments-SAAM & OASIS-C",
      "Conducted implementation trainings for 200+ nurses and coordinated deployment of laptops for field nurses",
      "Reengineered clinical work processes, ensured compliance with SAAM & OASIS, and increased operational efficiencies",
      "Developed SharePoint sites to improve collaboration on projects and operational needs. Created SharePoint sites and custom forms for the PACE, Long Term Managed Care and Licensed Home Care Agency Programs"
    ]
  },
  {
    company: "Center for Nursing and Rehabilitation",
    role: "Systems Analyst/Informatics Nurse",
    date: "May 2002 - June 2009",
    length: "7 years 2 months",
    location: "?",
    details: [
      "Projects include:",
      "Occurrences System development",
      "OCS OASIS, EQUIP benchmarking systems implementation",
      "Conversion from ADL to ADP/HR Perspective to Lawson",
      "Implementation of McKesson Horizon Homecare (ADHC, Lombardi, CHHA, Licensed Agencies), custom clinical forms development; forms mapping/ LOINC mapping; evidence-based guidelines/care plans, Telehealth, and Telephony",
      "X12 EDI 837/835, 270/271 analysis and implementation",
      "Electronic Billing and Payment Processing of Vendor Services; developed electronic claim forms for commercial insurance",
      "SigmaCare system selection and implementation"
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