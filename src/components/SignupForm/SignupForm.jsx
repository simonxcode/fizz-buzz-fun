import React, { useState } from 'react'

const SignupForm = () => {
  const [values, setValues] = useState({
    userName: '',
    gender: '',
    maritalStatus: '',
    dateOfBirth: '',
    luckyNumber: ''
  
  });

  const [submissions, setSubmission] = useState([
    {
      userName: 'april123',
      gender: 'female',
      maritalStatus: 'married',
      dateOfBirth: '2000-01-01',
      luckyNumber: '3'
    }
  ]);

  const addSubmission = (values) => {
    const newSubmissions = [...submissions, values];
    setSubmission(newSubmissions);
  };

  const handleChange = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addSubmission(values);
    console.log(submissions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <h1 className="text-2xl font-bold">Signup Form</h1>
        <div>
          <label className="m-2 pr-4">Username:</label>
          <input
            type='text'
            name='userName'
            onChange={handleChange}
            value={values.userName || ''}
            className="border-solid border-2 border-current m-2"
          />
        </div>
        <div>
          <div className="m-2 pr-4">
            Gender:
            <div>
              <label className="m-2 pr-4">male</label>
              <input
                type='radio'
                name='gender'
                value='male'
                onChange={handleChange}
              />
              <label className="m-2 pr-4">female</label>
              <input
                type='radio'
                name='gender'
                value='female'
                onChange={handleChange}
              />
              <label className="m-2 pr-4">other</label>
              <input
                type='radio'
                name='gender'
                value='other'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="m-2 pr-4">
            Marital Status:
            <div>
              <label className="m-2 pr-4">single</label>
              <input
                type='radio'
                name='maritalStatus'
                value='single'
                onChange={handleChange}
              />
              <label className="m-2 pr-4">married</label>
              <input
                type='radio'
                name='maritalStatus'
                value='female'
                onChange={handleChange}
              />
              <label className="m-2 pr-4">other</label>
              <input
                type='radio'
                name='maritalStatus'
                value='other'
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="m-2 pr-4">Date of Birth:</label>
            <input
              type='date'
              name='dateOfBirth'
              onChange={handleChange}
              value={values.dateOfBirth || ''}
              className="border-solid border-2 border-current m-2"
            />
          </div>
          <div>
            <label className="m-2 pr-4">Lucky Number:</label>
            <input
              type='number'
              name='luckyNumber'
              onChange={handleChange}
              value={values.luckyNumber || ''}
              className="border-solid border-2 border-current m-2"
            />
          </div>
        </div>
        <div>
          <input type='submit' value='Submit' className="border-solid border-2  border-current m-2 pl-2 pr-2 rounded-md" />
        </div>
      </form>
    </div>
  )
}

export default SignupForm;
