import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

//
// initial values
//
const initialValues = { email: '', password: '' };

//
// validate
//
function validate(values) {
    
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

//
// submit
//
function onSubmit(values, { setSubmitting }) {

    function dothing() {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    setTimeout(dothing, 400);
}

//
// form 
//
function myform({ isSubmitting }) {

    return <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
}

//
// component
//
const Basic = () => (
    <div>
        <h1>Example 2</h1>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} >
            {myform}
        </Formik>
    </div>
);

export default Basic;
