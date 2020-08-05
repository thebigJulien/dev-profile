import React from 'react';
import './App.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from './lib/validation_rules';


function App() {

  let specialization = [
    {label:'noob', value:'noob'},
    {label:'frontend', value:'frontend'},
    {label:'backend', value:'backend'},
    {label:'fullstack', value:'fullstack'}
  ]

  let initialValues = { 
    firstName:'',
    lastName:'',
    email:'', 
    password:'',
    skills: {
      HTML: false,
      CSS: false,
      SCSS: false,
      Bootstrap: false,
      React: false,
      ExpressJS: false,
      JWT: false,
      Formik: false,
      Git: false
    },
    specialization:''
  };

  const onSubmit = (values, submitProps) => {
    console.log('Submit done: ', values)
    submitProps.resetForm()

  }

  return (
    <div className="App">
      <main>
        <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginSchema}
          >
          <Form>
          <div className="form-input">
              <label htmlFor="firstName">First Name: </label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className="form-input">
              <label htmlFor="lastName">Last Name: </label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

          <div className="form-input">
              <label htmlFor="email">Email: </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-input">
              <label htmlFor="password">Password: </label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>


          {/* CHECKBOXES */}

            <div className="form-input">
              <div className="checkbox-input">
                <label>HTML</label>
                <Field id="HTML" name="skills.HTML" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>CSS</label>
                <Field id="CSS" name="skills.CSS" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>SCSS</label>
                <Field id="SCSS" name="skills.SCSS" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>Bootstrap</label>
                <Field id="Bootstrap" name="skills.Bootstrap" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>React</label>
                <Field id="React" name="skills.React" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>ExpressJS</label>
                <Field id="ExpressJS" name="skills.ExpressJS" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>JWT</label>
                <Field id="JWT" name="skills.JWT" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>Formik</label>
                <Field id="Formik" name="skills.Formik" type="checkbox" />
              </div>

              <div className="checkbox-input">
                <label>Git</label>
                <Field id="Git" name="skills.Git" type="checkbox" />
              </div>

            </div>

            
            <div className="form-input">
              <label>specialization</label>
              <Field as="select" name="specialization">
                {specialization.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
}

export default App;
