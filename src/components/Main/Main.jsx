// import React, { useState } from 'react'
// import SignupForm from '../SignupForm'
// import Result from '../Result/Result'
// import useForm from '../../hooks/useForm';

// const Main = () => {
//   const { submissions } = useForm()
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const submitForm = () => {
//     setIsSubmitted(true)
//   }

//   return (
//     <div className="bg-gray-100 p-4">
//       {!isSubmitted ? <SignupForm submitForm={submitForm} /> : <Result submissions={ submissions} />}
//     </div>
//   )
// }

// export default Main