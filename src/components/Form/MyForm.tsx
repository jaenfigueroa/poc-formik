import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* DEFINE EL ESQUEMA DE VALIDACIÓN UTILIZANDO YUP */
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

type YourFormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
};

/* CREAR NUESTRO COMPONENTE */
export const MyForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const onSubmit = (values:YourFormValuesType) => {
    // Lógica para enviar los datos del formulario
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
