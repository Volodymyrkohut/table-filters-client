import * as React from 'react';
import './LayoutControl.scss';
import classNames from 'classnames';
import IconImportant from '../../../icons/fields/IconImportant';

interface IProps {
  isError?: boolean;
  error?: string;
  label?: string;
  children: React.ReactNode;
}

const ControlLayout: React.FC<IProps> = (props) => {
  const { children, label = '', isError, error } = props;
  const classes = classNames('filter-field-control', { isError });

  return (
    <div className={classes}>
      {label && <label>{label}</label>}
      <div className="filter-field-control__field">{children}</div>
      <span className="filter-field-control__error">
        {isError && (
          <span>
            {/*<IconImportant />*/}
            {error}
          </span>
        )}
      </span>
    </div>
  );
};

export default ControlLayout;
