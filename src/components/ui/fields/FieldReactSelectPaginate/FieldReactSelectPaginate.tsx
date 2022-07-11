import * as React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { AsyncPaginateType } from '../../../../types/filter';

export interface Props extends AsyncPaginateType {
  isError?: boolean;
}

const FieldReactSelectPaginate: React.FC<Props> = (props) => {
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
