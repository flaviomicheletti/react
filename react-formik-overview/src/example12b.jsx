import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//
// initial values
//
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
}

//
// validate
//
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

//
// submit
//
function onSubmit(values, { setSubmitting }) {
    // same shape as initial values
    console.log(values);
}

//
// form 
//
const myform = ({ errors, touched }) => (
    <Form>
        <Field name="firstName" />
        {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
        ) : null}
        <Field name="lastName" />
        {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
        ) : null}
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <button type="submit">Submit</button>
    </Form>
)

//
// component
//
const ValidationSchemaExample = () => (
    <div>
        <h1>Signup</h1>
        <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmit} >
            {myform}
        </Formik>
    </div>
);

export default ValidationSchemaExample;