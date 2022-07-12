import * as React from 'react';
import { AsyncPaginateType } from '../../../types/filter';
export interface IAppReactSelectPaginateControl extends AsyncPaginateType {
    onChange?: (value: any) => void;
    name: string;
    label?: string;
}
declare const AppReactSelectPaginateControl: React.FC<IAppReactSelectPaginateControl>;
export default AppReactSelectPaginateControl;
