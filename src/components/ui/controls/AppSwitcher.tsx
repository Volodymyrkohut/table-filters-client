import React, { FC, HTMLProps } from 'react';
import { Field, FieldProps } from 'formik';
import ControlLayout from './components/LayoutControl/LayoutControl';
import FieldSwitch from '../fields/FieldSwitch/FieldSwitch';

interface Props extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  label?: string;
}

const AppSwitcher: FC<Props> = (props) => {
  const { name, label, ...rest } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta } = propsField;
        const isError: boolean = meta.touched && !!meta.error;

        return (
          <ControlLayout isError={isError} error={meta.error} label={label}>
            <div className="app-switcher">
              <FieldSwitch isError={isError} {...rest} {...field} checked={field.value} />
                {field.value ? 'On' : 'Off'}
            </div>
          </ControlLayout>
        );
      }}
    </Field>
  );
};

export default AppSwitcher;
