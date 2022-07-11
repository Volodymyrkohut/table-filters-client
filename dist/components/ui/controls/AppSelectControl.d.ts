import * as React from 'react';
declare type FormOptionType = {
    value: string;
    key: string;
    disabled?: boolean;
};
export interface IAppSelectControl extends React.HTMLProps<HTMLSelectElement> {
    options: Array<FormOptionType | any>;
}
declare const AppSelectControl: React.FC<IAppSelectControl>;
export default AppSelectControl;
