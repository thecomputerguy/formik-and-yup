import React from 'react'
import {Formik} from 'formik'

function FormikRenderProps(){

    const initialValues = {
        email: '',
        password: ''
    }

    function onSubmit(values) {
        
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <Formik {...{initialValues, onSubmit}}>
        {
            ({getFieldProps, handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="formRow">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        {...getFieldProps("email")}
                        />
                    </div>
                </form>
            )
        }
        </Formik>
    ); 
}

export default FormikRenderProps