import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getPasswordStrength } from '../../utils/passwordStrength'; // Password strength utility

const SignUp = () => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Sign Up successful', values);
          alert('Sign Up Successful');
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setFieldValue('password', e.target.value);
                  setPasswordStrength(getPasswordStrength(e.target.value));
                }}
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              <div className="mt-2 text-sm text-gray-600">
                Password strength: <strong>{passwordStrength}</strong>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
