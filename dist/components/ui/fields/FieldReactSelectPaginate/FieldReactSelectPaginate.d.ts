import * as React from 'react';
import { AsyncPaginateType } from '../../../../types/filter';
export interface Props extends AsyncPaginateType {
    isError?: boolean;
}
declare const FieldReactSelectPaginate: React.FC<Props>;
export default FieldReactSelectPaginate;
