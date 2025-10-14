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
        <h2 className='mt-8 text-2xl'>User Registration</h2>
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
                <Form className='form-layout'>
                    <div className='form-group'>
                        <Field type="text" name="fullName" placeholder="Full Name" className='form-field'/>
                        {/* 3. Corrected name attribute */}
                        <ErrorMessage name="fullName" component="div" className='error-message' />
                    </div>

                    <div className='form-group'>
                        <Field type="email" name="email" placeholder="Email Address" className='form-field'/>
                        <ErrorMessage name="email" component="div" className='error-message' />
                    </div>

                    <div className='form-group'>
                        <Field type="password" name="password" placeholder="Password" className='form-field'/>
                        {/* 4. Corrected typo and closing tag */}
                        <ErrorMessage name='password' component="div" className='error-message' />
                    </div>
                    
                    <button type="submit" className='submit-button'>Submit</button>
                </Form>
            )}

        </Formik>
    </div>
);

export default FormikForm;






    // // <div className='p-6 mx-auto max-w-4xl mt-12 mb-8 bg-white shadow-lg hover:shadow-lg/50'>
    //   <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center'>
    //     <input type="text" placeholder='Enter Your Full Name' required name='fullName' value={formData.fullName} onChange={handleOnChange}
    //     className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
    //     />
    //     <input type="email" placeholder='Enter Your Email Here' name="email" required value={formData.email} onChange={handleOnChange} 
    //     className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
    //     />
    //     <input type="password" required name="password" value={formData.password} onChange={handleOnChange} 
    //     className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
    //     />
    //     <button type="submit" className='border py-3 px-2 rounded font-bold text-2xl bg-amber-400 hover:bg-amber-200 transition-transform duration-300 hover:scale-120 shadow-2xl'>submit</button>
    //   </form>
    // // </div>