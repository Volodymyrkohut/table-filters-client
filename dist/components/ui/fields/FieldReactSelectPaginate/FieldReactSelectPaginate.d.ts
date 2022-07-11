import { FC } from 'react';
import { AsyncPaginateProps } from 'react-select-async-paginate';
interface PropsType extends AsyncPaginateProps<any, any, any, any> {
    isError?: boolean;
}
declare const FieldReactSelectPaginate: FC<PropsType>;
export default FieldReactSelectPaginate;
