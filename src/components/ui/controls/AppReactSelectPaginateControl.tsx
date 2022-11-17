import * as React from 'react';
import { Field, FieldProps } from 'formik';
import ControlLayout from './components/LayoutControl/LayoutControl';
// eslint-disable-next-line import/no-named-as-default
import FieldReactSelectPaginate from '../fields/FieldReactSelectPaginate/FieldReactSelectPaginate';
import { AsyncPaginateType } from '../../../types/filter';

export interface IAppReactSelectPaginateControl extends AsyncPaginateType {
  onChange?: (value: any) => void;
  name: string;
  label?: string;
}

const AppReactSelectPaginateControl: React.FC<IAppReactSelectPaginateControl> = (props) => {
  const { name, label, onChange, onBlur, ...rest } = props;

  return (
    <Field name={name}>
      {(propsField: FieldProps) => {
        const { field, meta, form } = propsField;
        const isError = meta.touched && !!meta.error;

        return (
          <ControlLayout isError={isError} error={meta.error} label={label}>
            <FieldReactSelectPaginate
              {...rest}
              {...field}
              onBlur={(value) => {
                if (onBlur) onBlur(value);
                form.setFieldTouched(name, true);
              }}
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

export default AppReactSelectPaginateControl;
