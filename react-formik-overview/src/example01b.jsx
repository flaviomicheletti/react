import React from 'react';
import { Formik } from 'formik';

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

    function dothing () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    setTimeout(dothing, 400);
}

//
// form 
//
function myform({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
}) {

    return <form onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
}

//
// component
//
const Basic = () => (
    <div>
        <h1>Example 1</h1>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit} >
            {myform}
        </Formik>
    </div>
);

export default Basic;
