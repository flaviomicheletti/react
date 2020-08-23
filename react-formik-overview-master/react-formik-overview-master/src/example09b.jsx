import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

//
// https://jaredpalmer.com/formik/docs/tutorial#leveraging-react-context
//

//
// initial values
//
const initialValues = { firstName: '', lastName: '', email: '' };

//
// validate
//
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
})

//
// submit
//
function onSubmit(values, { setSubmitting }) {

  function dothing () {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
  }

  setTimeout(dothing, 400);
}

//
// form 
//
const myform = formik => (
  <form onSubmit={formik.handleSubmit}>

    <label htmlFor="firstName">First Name</label>
    <input id="firstName" {...formik.getFieldProps('firstName')} />
    {formik.touched.firstName && formik.errors.firstName ? (
      <div>{formik.errors.firstName}</div>
    ) : null}

    <label htmlFor="lastName">Last Name</label>
    <input id="lastName" {...formik.getFieldProps('lastName')} />
    {formik.touched.lastName && formik.errors.lastName ? (
      <div>{formik.errors.lastName}</div>
    ) : null}

    <label htmlFor="email">Email Address</label>
    <input id="email" {...formik.getFieldProps('email')} />
    {formik.touched.email && formik.errors.email ? (
      <div>{formik.errors.email}</div>
    ) : null}

    <button type="submit">Submit</button>
    
  </form>
)

//
// component
//
const SignupForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {myform}
    </Formik>
  );
};

export default SignupForm;