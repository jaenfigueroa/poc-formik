import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

/* DEFINE EL ESQUEMA DE VALIDACIÓN UTILIZANDO YUP */
const validationSchema = Yup.object({
  firstName: Yup.string().required('Nombre es necesario'),
  lastName: Yup.string().required('Apellido es necesario'),
  email: Yup.string().email('Invalid email address').required('Email es necesario'),
  phone: Yup.number().required('Numero de telefono es necesario'),
  message: Yup.string().required('Mensaje es necesario'),
})

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: number
  message: string
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: 0,
  message: '',
}

/* CREAR NUESTRO COMPONENTE */
export const MyForm = () => {

  const onSubmit = (values: FormValues) => {
    // Lógica para enviar los datos del formulario
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className='bg-red-500'>
          <label htmlFor='firstName'>First Name</label>
          <Field type='text' id='firstName' name='firstName' />
          <ErrorMessage name='firstName' component='div' />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name</label>
          <Field type='text' id='lastName' name='lastName' />
          <ErrorMessage name='lastName' component='div' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component='div' />
        </div>

        <div>
          <label htmlFor='phone'>Phone</label>
          <Field type='number' id='phone' name='phone' />
          <ErrorMessage name='phone' component='div' />
        </div>


        <div>
          <label htmlFor='message'>Mensaje</label>
          <Field type='string' id='message' name='message' />
          <ErrorMessage name='message' component='div' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
