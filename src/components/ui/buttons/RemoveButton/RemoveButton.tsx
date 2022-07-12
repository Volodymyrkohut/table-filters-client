import * as React from 'react';
import classNames from 'classnames';
import './RemoveButton.scss';
import IconRemove from '../../icons/fields/IconRemove';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const RemoveButton: React.FC<ButtonProps> = ({ className = '', ...rest }) => {
  const classes = classNames('remove-button', classNames);
  return (
    <button {...rest} className={classes}>
      <IconRemove />
    </button>
  );
};

export default RemoveButton;
