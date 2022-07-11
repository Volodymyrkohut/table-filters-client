import * as React from 'react';
import { AsyncPaginate, AsyncPaginateProps } from 'react-select-async-paginate';

interface PropsType extends AsyncPaginateProps<any, any, any, any> {
  isError?: boolean;
}

const FieldReactSelectPaginate: React.FC<PropsType> = (props) => {
  const { ...rest } = props;

  return (
    <AsyncPaginate
      additional={{
        page: 1,
      }}
      {...rest}
    />
  );
};

export default FieldReactSelectPaginate;
