import * as React from 'react';
import { Props } from 'react-select';
import { Field, FieldProps } from 'formik';
import FieldReactSelect from '../fields/FieldReactSelect/FieldReactSelect';
import ControlLayout from './components/LayoutControl/LayoutControl';

export interface IAppReactSelectControl extends Props {
  options: Array<any> | any;
  onChange?: (value: any) => void;
  name: string;
  label?: string;
  type?: 'async' | 'creatable' | 'default';
}

const AppReactSelectControl: React.FC<IAppReactSelectControl> = (props) => {
  const { name, label, onChange, ...rest } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta, form } = propsField;
        const isError = meta.touched && !!meta.error;

        return (
          <ControlLayout isError={isError} error={meta.error} label={label}>
            <FieldReactSelect
              {...rest}
              {...field}
              onBlur={() => form.setFieldTouched(name, true)}
              onChange={(value: any) => {
                if (onChange) onChange(value);
                form.setFieldValue(name, value);
              }}
            />
          </ControlLayout>
        );
      }}
    </Field>
  );
};

export default AppReactSelectControl;
