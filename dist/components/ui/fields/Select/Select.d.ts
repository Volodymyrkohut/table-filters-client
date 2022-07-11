import { FC, ReactNode, SelectHTMLAttributes } from 'react';
export interface ISelect extends SelectHTMLAttributes<any> {
    isError: boolean;
    children: ReactNode;
}
declare const Select: FC<ISelect>;
export default Select;
