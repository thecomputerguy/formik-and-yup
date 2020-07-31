import React from 'react'
import {useFormik} from 'formik' 

const BaseFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validate(){
            const errors = {}
            
            if (formik.touched.email && !formik.values.email){
                errors.email = "Email is required!"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)){
                errors.email = "Invalid email address"
            }

            if(formik.touched.password && !formik.values.password){
                errors.password = "Password is required!"
            }else if(formik.values.password.length <= 8){
                errors.password = "Password must be more than 8 characters"
            }
            return errors
        },

        onSubmit(values){
            console.log("I am inside formik handler")
        }
    })

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return (<form className="baseForm" onSubmit={formik.handleSubmit} noValidate>
        <p>{JSON.stringify(formik.errors, null, 2)}</p>
        <div className="formRow">
            <label htmlFor="email">Email:</label>
            <input
            id="email"
            name="email" 
            type="email" 
            placeholder="email" 
            value={formik.values.email}
            onChange={formik.handleChange}
            />
        </div>
        <span>{formik.errors.email ? formik.errors.email : null}</span> 
        
        <div className="formRow">
              <label htmlFor="password">password:</label>
              <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              />
        </div>
        <span>{formik.errors.password ? formik.errors.password : null}</span> 
        <input type="submit" value="submit" />
    </form>)
}

export default BaseFormik