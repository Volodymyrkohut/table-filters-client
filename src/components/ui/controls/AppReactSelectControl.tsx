import * as React from 'react';
import { Props } from 'react-select';
import { Field, FieldProps } from 'formik';
import FieldReactSelect from '../fields/FieldReactSelect/FieldReactSelect';
import ControlLayout from './components/LayoutControl/LayoutControl';

export interface IAppReactSelectControl extends Props {
  options?: Array<any> | any;
  onChange?: (value: any) => void;
  name: string;
  label?: string;
}

// eslint-disable-next-line consistent-return
const errorFormat = (errors: string | Array<{ id: string; name: string }> | undefined) => {
  if (typeof errors === 'string') {
    return errors;
  }
  if (Array.isArray(errors)) {
    const showError = errors.filter((error) => {
      return error && error.id;
    });

    if (showError[0] && showError[0].id) {
      return showError[0].id;
    }
  } else {
    return '';
  }
};

const AppReactSelectControl: React.FC<IAppReactSelectControl> = (props) => {
  const { name, label, onChange, ...rest } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta, form } = propsField;
        const isError = meta.touched && !!meta.error;
        console.log(meta.error);
        return (
          <ControlLayout isError={isError} error={errorFormat(meta.error)} label={label}>
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
