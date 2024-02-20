import { ErrorMessage, Field, FieldProps } from 'formik';

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
};

const FormikInput = ({ label, name, type = "text", placeholder }: Props) => (
  <div>
    <label className="form-label" style={{ width: '100%' }}>
      {label}
      <Field name={name} placeholder={placeholder} type={type} className="form-control" />
    </label>
    <ErrorMessage name={name} render={(error) => <div className="text-danger">{error}</div>} />
  </div>
);

export default FormikInput;