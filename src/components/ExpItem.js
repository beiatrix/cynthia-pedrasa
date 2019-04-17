import React from 'react'

export const ExpItem = props => {
  const {data} = props
  console.log(data)
  return (

    <div className="expItem">
      <h2>{data.company}</h2>
      <h3>{data.role}</h3>
      <p>{data.date}</p>
      <p>{data.length}</p>
      <p>{data.location}</p>
      <ul>
        {
          data.details.map((item, idx) => {
            return (
              <li key={`expItemDetail-${idx}`}>{item}</li>
            )
          })
        }
      </ul>
        </div>
  )
}