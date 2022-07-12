import React, { FC, ReactNode, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import IconDropdown from '../../icons/fields/IconDropdown';
import './Select.scss';
export interface ISelect extends SelectHTMLAttributes<any> {
  isError: boolean;
  children: ReactNode;
}

const Select: FC<ISelect> = (props) => {
  const { isError, children, className, ...rest } = props;
  const classes = classNames('field-select', className, { isError });

  return (
    <div className={classes}>
      <select autoComplete="off" {...rest}>
        {children}
      </select>
      <IconDropdown />
    </div>
  );
};

export default Select;
