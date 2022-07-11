import { FC, HTMLProps } from 'react';
interface Props extends HTMLProps<HTMLInputElement> {
    isError?: boolean;
    label?: string;
    mask?: string;
    maskChar?: string;
    alwaysShowMask?: boolean;
    formatChars?: any;
    unmask?: boolean;
}
declare const AppInputControl: FC<Props>;
export default AppInputControl;
