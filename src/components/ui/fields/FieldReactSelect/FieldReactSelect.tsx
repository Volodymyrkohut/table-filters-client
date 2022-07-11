import * as React from 'react';
import { Props } from 'react-select';
import Creatable from 'react-select/async-creatable';

interface PropsType extends Props {
  isError?: boolean;
}

const FieldReactSelect: React.FC<PropsType> = function (props) {
  const { options, isError, ...rest } = props;

  return <Creatable defaultOptions={options} {...rest} />;
};

export default FieldReactSelect;
