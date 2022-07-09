import React, { FC, HTMLProps } from 'react';
import { Field, FieldProps } from 'formik';
import Input from '../fields/Input/Input';
import ControlLayout from './components/LayoutControl/LayoutControl';

interface Props extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  label?: string;
  mask?: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
  formatChars?: any;
  unmask?: boolean;
}

const AppInputControl: FC<Props> = (props) => {
  const { name, type = 'text', disabled, label, id, readOnly } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta } = propsField;
        const isError: boolean = meta.touched && !!meta.error;

        return (
          <ControlLayout isError={isError} error={meta.error} label={label}>
            <Input type={type} id={id} {...field} readOnly={readOnly} isError={isError} disabled={disabled} />
          </ControlLayout>
        );
      }}
    </Field>
  );
};

export default AppInputControl;
