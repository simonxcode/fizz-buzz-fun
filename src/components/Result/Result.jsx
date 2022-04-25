import React from 'react'

const Result = ({ submission }) => {
  return (
    <div>
      <p>Username: {submission.userName}</p>
      <p>Gender: {submission.gender}</p>
      <p>Marital Status: {submission.maritalStatus}</p>
      <p>Date of Birth: {submission.dateOfBirth}</p>
      <p>Lucky Number: {submission.userName}</p>
      <p>Team: {submission.team}</p>
    </div>
  )
}

export default Result
