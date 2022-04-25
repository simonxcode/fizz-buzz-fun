import React from 'react'
import Result from '../Result';
import useForm from '../../hooks/useForm';

const Form = () => {
  const { values, submissions, errors, handleChange, handleSubmit } = useForm()

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md bg-green-100 p-4">
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
          {errors.userName && (<p>{errors.userName}</p>)}
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
              {errors.gender && (<p>{errors.gender}</p>)}
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
              {errors.maritalStatus && (<p>{errors.maritalStatus}</p>)}
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
            {errors.dateOfBirth && (<p>{errors.dateOfBirth}</p>)}
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
            {errors.luckyNumber && (<p>{errors.luckyNumber}</p>)}
          </div>
        </div>
        <div>
          <input type='submit' value='Submit' className="border-solid border-2  border-current m-2 pl-2 pr-2 rounded-md" />
        </div>
      </form>
      {
        submissions.map((submission, index) => (
          <Result key={index} submission={submission} />
        ))}
    </div>
  )
}

export default Form;
