import React from 'react'
import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup'

const formikValidate = Yup.object({
    fullName:Yup.string().required('Your full name is required'),
    email:Yup.string().email("Enter a valid email address").required("Email is required"),
    password:Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required("Password is required")
  });

const FormikForm = ()=>(
 <div className='form-container'>
        <h2 className='mt-8 text-2xl font-bold text-center'>User Registration</h2>
        <Formik 
            initialValues={{ fullName: "", email: "", password: "" }}
            // 2. Corrected prop name: validationSchema
            validationSchema={formikValidate}
            onSubmit={(values) => {
                // Here is where you would call your API (e.g., '/api/users/signup')
                console.log(values)
            }}
        >
            {() => (
                <Form className='p-6 mx-auto flex flex-col items-center justify-center max-w-4xl'>
                    <div className='p-3'>
                        <Field type="text" name="fullName" placeholder="Full Name" className='border-1 p-3 rounded text-2xl text-gray-400 w-full focus:ring-amber-200'/>
                        {/* 3. Corrected name attribute */}
                        <ErrorMessage name="fullName" component="div" className='p-3 mt-4 font-medium text-xl' />
                    </div>

                    <div className='p-3'>
                        <Field type="email" name="email" placeholder="Email Address" className='border-1 p-3 rounded text-2xl text-gray-400 w-full focus:ring-amber-200'/>
                        <ErrorMessage name="email" component="div" className='p-3 mt-4 font-medium text-xl' />
                    </div>

                    <div className='p-3'>
                        <Field type="password" name="password" placeholder="Password" className='border-1 p-3 rounded text-2xl text-gray-400 w-full focus:ring-amber-200'/>
                        {/* 4. Corrected typo and closing tag */}
                        <ErrorMessage name='password' component="div" className='p-3 mt-4 font-medium text-xl' />
                    </div>
                    
                    <button type="submit" className='border p-3 rounded bg-amber-500 font-medium text-sm hover:bg-amber-200 shadow-2xl'>Submit</button>
                </Form>
            )}

        </Formik>
    </div>
);

export default FormikForm;
