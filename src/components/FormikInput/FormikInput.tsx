import { ErrorMessage, Field } from 'formik'

type Props = {
    label: string;
    name: string;
    type: string;
  placeholder: string;

  };

  const FormikInput = ({ label, name, type, placeholder,}: Props) => {
    return (
      <div >
        <label className="form-label " style={{width: '100%'}}>
            {label}
            <Field name={name} placeholder={placeholder} type={type || "text"} className="form-control" 
             />
        </label>
        <ErrorMessage name={name} render={(error) => <div className="text-danger">{error}</div>} />
      </div>
    );





};
export default FormikInput
