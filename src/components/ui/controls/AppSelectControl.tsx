import * as React from 'react';
import { Field, FieldProps } from 'formik';
import ControlLayout from './components/LayoutControl/LayoutControl';
import Select from '../fields/Select/Select';

type FormOptionType = {
  value: string;
  key: string;
  disabled?: boolean;
};

export interface IAppSelectControl extends React.HTMLProps<HTMLSelectElement> {
  options: Array<FormOptionType | any>;
}

const AppSelectControl: React.FC<IAppSelectControl> = (props) => {
  const { name, options = [], disabled, label, id, className } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta } = propsField;
        const isError = meta.touched && !!meta.error;

        return (
          <ControlLayout isError={isError} error={meta.error} label={label}>
            <Select id={id} {...field} isError={isError} disabled={disabled} className={className}>
              {options.map((option: FormOptionType) => (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              ))}
            </Select>
          </ControlLayout>
        );
      }}
    </Field>
  );
};

export default AppSelectControl;
