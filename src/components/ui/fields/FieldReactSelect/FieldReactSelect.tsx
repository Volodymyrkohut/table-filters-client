import * as React from 'react';
import Async from 'react-select/async';
import ReactSelect, { components, Props } from 'react-select';
import Creatable from 'react-select/async-creatable';

interface PropsType extends Props {
  type?: 'async' | 'creatable' | 'default';
  isError?: boolean;
}

const FieldReactSelect: React.FC<PropsType> = function (props) {
  const { type = 'default', options, isError, ...rest } = props;

  // const DropdownIndicator = (parameters: any) =>
  //   components.DropdownIndicator && <components.DropdownIndicator {...parameters}>&nbsp;</components.DropdownIndicator>;

  const noOptionsMessage = (data: any): any => {
    if (data.inputValue === '') {
      return null;
    }

    return 'Результатів не знайдено';
  };

  // console.log("rest.value", rest.value)

  switch (type) {
    case 'async':
      return <Async defaultOptions={options} noOptionsMessage={noOptionsMessage} {...rest} />;
    case 'creatable':
      return <Creatable defaultOptions={options} {...rest} />;
    case 'default':
      return <ReactSelect options={options} {...rest} />;
    default:
      return <ReactSelect options={options} {...rest} />;
  }
};

export default FieldReactSelect;
