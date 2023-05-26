import React from 'react';
import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

export const LoginForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
    checkbox: false,
    radio : '',
    file : '',
  };

  const SignupSchema = Yup.object().shape({
    name : Yup.string()
      .min(3)
      .max(12)
      .required(),
    email : Yup.string()
      .email()
      .required(),
    password : Yup.string()
      .min(3)
      .max(30)
      .required(),
    phone: Yup.string()
      .matches(/^\d+$/, 'Phone number must contain only digits')
      .min(5, 'Phone number must be at least 5 digits')
      .max(10, 'Phone number can be maximum 10 digits')
      .required('Phone number is required'),
    checkbox: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
    radio: Yup.string()
      .required(),
    file: Yup.mixed()
      .required(),

  })

  function handleSubmit(values, { resetForm }) {
    console.log(values);
    resetForm();
  }

  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit}
    validationSchema={SignupSchema}>
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor="name">Text Input:
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage component="div" name="name" className={css.error}/>
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="email">Email Input:
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage component="div" name="email" className={css.error}/>
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="password">Password Input:
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage component="div" name="password" className={css.error}/>
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="phone">Phone Input:
          <Field type="number" name="phone" className={css.input} />
          <ErrorMessage component="div" name="phone" className={css.error}/>
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="checkbox">
            <Field type="checkbox" name="checkbox" className={css.checkbox} />
            Check me
            <ErrorMessage component="div" name="checkbox" className={css.error}/>
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="radio">
            <Field type="radio" name="radio" value="option1" className={css.radio} />
            Option 1
          </label>
        </div>

        <div className={css.formItem}>
          <label htmlFor="radio">
            <Field type="radio" name="radio" value="option2" className={css.radio} />
            Option 2
          </label>
          <ErrorMessage component="div" name="radio" className={css.error}/>
        </div>

        <div className={css.formItem}>
          <label htmlFor="file">File Input:</label>
          <Field type="file" name="file" className={css.input} />
          <ErrorMessage component="div" name="file" className={css.error}/>
        </div>

        <div className={css.formItem}>
          <button type="submit" className={css.submitButton} disabled={initialValues.checkbox}>Отправить</button>
        </div>
      </Form>
    </Formik>
  );
};