import React, { FC, ReactNode, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ISelect extends SelectHTMLAttributes<any> {
  isError: boolean;
  // disabled?: boolean;
  // id?: string;
  // name?: string;
  // readOnly?: boolean;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  // onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  // onClick?: (event: any) => void;
  children: ReactNode;
}

const Select: FC<ISelect> = (props) => {
  const { isError, children, ...rest } = props;
  const classes = classNames('select', { isError });

  return (
    <div className={classes}>
      <select autoComplete="off" {...rest}>
        {children}
      </select>
    </div>
  );
};

export default Select;
