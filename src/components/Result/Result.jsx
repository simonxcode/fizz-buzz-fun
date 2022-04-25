import React from 'react'

const Result = ({ submission }) => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="bg-gray-50 p-4 border-solid border">
        <div className="flex">
          <p className="font-bold pr-2">Username:</p>
          <p>{submission.userName}</p>
        </div>
        <div className="flex">
          <p className="font-bold pr-2">Gender:</p>
          <p>{submission.gender}</p>
        </div>
        <div className="flex">
          <p className="font-bold pr-2">Date of Birth:</p>
          <p>{submission.dateOfBirth}</p>
        </div>
        <div className="flex">
          <p className="font-bold pr-2">Lucky Number:</p>
          <p>{submission.luckyNumber}</p>
        </div>
        <div className="flex">
          <p className="font-bold pr-2">Team:</p>
          <p>{submission.team}</p>
        </div>
      </div>
    </div>
  )
}

export default Result
