import React from 'react';
import logo from './logo.svg';
import BaseFormik from './components/formikform/BaseFormik'
import FormikRenderProps from './components/formikrenderprops/FormikRenderProps'
import FormikRenderPropsWithComponent from './components/formikrenderpropswithcomponent/FormikRenderPropsWithComponent'
import FormikWithHooksAndYupValidation from './components/formikwithhooksandyupvalidation/FormikWithHooksAndYupValidation'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Formik with hooks and yup validation</p>
      <FormikWithHooksAndYupValidation></FormikWithHooksAndYupValidation>
        <p>Formik render props without components</p>
        <FormikRenderProps></FormikRenderProps>
        <p>Formik with useFormik hook</p>
        <BaseFormik></BaseFormik>
        <p>Formik Render props with components</p>
        <FormikRenderPropsWithComponent></FormikRenderPropsWithComponent>
      </header>
    </div>
  );
}

export default App;
