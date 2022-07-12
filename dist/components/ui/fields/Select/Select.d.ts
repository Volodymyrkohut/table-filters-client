import { FC, ReactNode, SelectHTMLAttributes } from 'react';
import './Select.scss';
export interface ISelect extends SelectHTMLAttributes<any> {
    isError: boolean;
    children: ReactNode;
}
declare const Select: FC<ISelect>;
export default Select;
