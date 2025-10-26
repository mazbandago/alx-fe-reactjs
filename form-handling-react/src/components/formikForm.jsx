import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Formik submitting:', values);
    // Simulate API call here
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form  className='p-6 mx-auto max-w-4xl bg-white rounded-2xl border-0 shadow-xl hover:shadow-lg/200 mb-10'>
        <div>
          <label className='font-bold'>Username:</label>
          <Field name="username"className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full' />
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label className='font-bold'>Email:</label>
          <Field name="email" type="email" className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full'/>
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label className='font-bold'>Password:</label>
          <Field name="password" type="password" className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full' />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
