import { useState, useEffect } from 'react'
import formValidation from '../components/Error/formValidation';

const useForm = submitForm => {
  const [values, setValues] = useState({
    userName: '',
    gender: '',
    maritalStatus: '',
    dateOfBirth: '',
    luckyNumber: ''

  });

  const [submissions, setSubmission] = useState([{
    userName: 'april123',
    gender: 'female',
    maritalStatus: 'married',
    dateOfBirth: '2000-01-01',
    luckyNumber: '3'
  }]);

  const [errors, setErrors] = useState({})
  const [correctData, setCorrectData] = useState(false)


  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
      submitForm(true)
    }
  }, [ submitForm, correctData, errors])

  const addSubmission = (values) => {
    const newSubmissions = [...submissions, values];
    setSubmission(newSubmissions);
  };

  const handleChange = event => {
    const { name,value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(formValidation(values))
    setCorrectData(true)
    addSubmission(values)
    console.log(submissions)
  };

  return {
    values,
    submissions, 
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm
