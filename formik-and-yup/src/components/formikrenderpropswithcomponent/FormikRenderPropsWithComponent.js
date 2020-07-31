import React from 'react'
import {Form, Formik, Field} from 'formik'

function FormikRenderPropsWithComponent(){
    const initialValues = {
        email: '',
        password: ''
    }

    function handleSubmit(values){
    
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <Formik {...{initialValues, handleSubmit}}>
            {
                () =>(
                    <div>
                    <label htmlFor="email">Email:</label>
                    <Form noValidate>
                        <Field
                        type="email"
                        id="email"
                        name="email"
                        />
                    </Form>
                    </div>
                )
            }
        </Formik>
    );
}

export default FormikRenderPropsWithComponent