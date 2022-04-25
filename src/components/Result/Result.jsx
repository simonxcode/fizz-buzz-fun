import React from 'react'

const Result = ({ submission }) => {
  return (
    <div className="grid grid-rows-3 grid-flow-col bg-green-50 p-4">
      <div className="bg-red-50 p-4">
        <p>Username: {submission.userName}</p>
        <p>Gender: {submission.gender}</p>
        <p>Marital Status: {submission.maritalStatus}</p>
        <p>Date of Birth: {submission.dateOfBirth}</p>
        <p>Lucky Number: {submission.userName}</p>
        <p>Team: {submission.team}</p>
      </div>
    </div>
  )
}

export default Result
