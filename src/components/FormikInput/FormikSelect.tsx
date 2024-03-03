import { ErrorMessage, Field } from "formik";

type Option = {
  id: string;
  name: string;
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;

};

const FormikSelect = ({ label, name, options, placeholder, }: Props) => {
  return (
    <div className="mb-3">
      <label className='form-label w-100'>
        {label}
        <Field as="select" className="form-control" name={name}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={option.id || index} value={option.id}>
              {option.name}
            </option>
          ))}

        </Field>
      </label>
      <ErrorMessage name={name} render={error => <div className='text-danger'>{error}</div>} />
    </div>
  );
}

export default FormikSelect;
