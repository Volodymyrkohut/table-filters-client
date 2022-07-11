import { FC, HTMLProps } from 'react';
declare type FormOptionType = {
    value: string;
    key: string;
    disabled?: boolean;
};
export interface IAppSelectControl extends HTMLProps<HTMLSelectElement> {
    options: Array<FormOptionType | any>;
}
declare const AppSelectControl: FC<IAppSelectControl>;
export default AppSelectControl;
