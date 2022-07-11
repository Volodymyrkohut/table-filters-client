import * as React from 'react';
import './LayoutControl.scss';
interface IProps {
    isError?: boolean;
    error?: string;
    label?: string;
    children: React.ReactNode;
}
declare const ControlLayout: React.FC<IProps>;
export default ControlLayout;
