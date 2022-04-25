import { useState, useEffect } from 'react'
import formValidation from '../components/Error/formValidation'

const useForm = () => {
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
      luckyNumber: '3',
      team: 'fizz'
   },
]);

  const [errors, setErrors] = useState({})
  const [correctData, setCorrectData] = useState(false)


  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
    }
  }, [correctData, errors])

  const addSubmission = (values) => {
    const newSubmissions = [...submissions, values]
    if(values.luckyNumber!== '') {
      setSubmission(newSubmissions)
      setValues('')
    }
  };

    const handleFizzBuzz = (submissions) => {
      submissions.map(ele => {
        if (ele.luckyNumber % 15 === 0) {
          return (ele.team = "fizzbuzz");
        } else if (ele.luckyNumber % 5 === 0) {
          return (ele.team = "buzz");
        } else if (ele.luckyNumber % 3 === 0) {
          return (ele.team = "fizz");
        } else {
          return (ele.team = "unknown");
        } 
      });
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
    handleFizzBuzz(submissions)
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
