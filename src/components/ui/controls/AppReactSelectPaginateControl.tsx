import * as React from 'react';
import { AsyncPaginateProps } from 'react-select-async-paginate';
import { Field, FieldProps } from 'formik';
import ControlLayout from './components/LayoutControl/LayoutControl';
import FieldReactSelectPaginate from '../fields/FieldReactSelectPaginate/FieldReactSelectPaginate';

export interface IAppReactSelectPaginateControl extends AsyncPaginateProps<any, any, any, any> {
  onChange?: (value: any) => void;
  name: string;
  label?: string;
}

const AppReactSelectPaginateControl: React.FC<IAppReactSelectPaginateControl> = (props) => {
  const { name, label, onChange, ...rest } = props;

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

export default AppReactSelectPaginateControl;
