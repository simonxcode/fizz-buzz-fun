const formValidation = values => {
  let errors = {}

  if (!values.userName) {
    errors.userName = 'username is required'
  }

  if (!values.gender) {
    errors.gender = 'gender is required'
  }

  if (!values.maritalStatus) {
    errors.maritalStatus = 'marital status is required'
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'date of birth is required'
  }

  if (!values.luckyNumber) {
    errors.luckyNumber = 'lucky number is required'
  }
  return errors
}

export default formValidation
