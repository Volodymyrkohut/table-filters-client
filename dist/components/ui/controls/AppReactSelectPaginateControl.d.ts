import * as React from 'react';
import { AsyncPaginateProps } from 'react-select-async-paginate';
export interface IAppReactSelectPaginateControl extends AsyncPaginateProps<any, any, any, any> {
    onChange?: (value: any) => void;
    name: string;
    label?: string;
}
declare const AppReactSelectPaginateControl: React.FC<IAppReactSelectPaginateControl>;
export default AppReactSelectPaginateControl;
