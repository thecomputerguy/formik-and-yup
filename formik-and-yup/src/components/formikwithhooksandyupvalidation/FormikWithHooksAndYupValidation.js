import React from 'react'
import {Formik, useFormik, yupToFormErrors} from 'formik'
import * as Yup from 'yup'

const FormikWithHooksAndYupValidation = () => {

    const formik = useFormik({
        initialValues:{
                email: '',
                password: ''
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email address").required("Required"),
            password:Yup.string().min(8, "Must be more than 8 characters").required("Required"),
        }),

        onSubmit(values){   
            console.log(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>
        <div>{JSON.stringify(formik.errors)}</div>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" value={formik.values.email} onChange={formik.handleChange}/>
    <span>{ formik.errors['email'] ? formik.errors['email'] : null}</span>
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
    <span>{formik.touched.email && formik.errors.password}</span>
            </div>
            <input type="submit" value="submit" />
        </form>
        </>
    );


}

export default FormikWithHooksAndYupValidation