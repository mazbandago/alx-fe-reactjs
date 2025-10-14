import React from 'react'
import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup'

const formikValidate = Yup.object({
    fullName:Yup.string().required('Your full name is required'),
    email:Yup.string().email("enter your email").required("your email must includee @"),
    password:Yup.string.password.required("You must enter a correc password")
  });
const FormikForm = ()=>(
  <Formik 
  initialValues={{fullName:"",email:"",password:""}}
  formikValidate={formikValidate}
  onSubmit={(values)=>{console.log(values)}};
  >
    
    { () => (
            <Form>
                <Field type="text" name="fullName" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password"
                <button type="submit">Submit</button>
            </Form>
        )}

  </Formik>
  
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