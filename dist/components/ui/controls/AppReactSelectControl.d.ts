import * as React from 'react';
import { Props } from 'react-select';
export interface IAppReactSelectControl extends Props {
    options?: Array<any> | any;
    onChange?: (value: any) => void;
    name: string;
    label?: string;
}
declare const AppReactSelectControl: React.FC<IAppReactSelectControl>;
export default AppReactSelectControl;
