import React, { FC, InputHTMLAttributes } from 'react';
import './FieldSwitch.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const FieldSwitch: FC<Props> = (props) => {
  const { isError, ...rest } = props;
  return (
    <label className={`field-switch ${isError ? 'isError' : ''}`}>
      <input type="checkbox" className="field-switch__input" {...rest}/>
      <span className="field-switch__slider field-switch__slider--round"></span>
    </label>
  );
};

export default FieldSwitch;