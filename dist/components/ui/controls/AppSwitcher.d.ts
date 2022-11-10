import { FC, HTMLProps } from 'react';
interface Props extends HTMLProps<HTMLInputElement> {
    isError?: boolean;
    label?: string;
}
declare const AppSwitcher: FC<Props>;
export default AppSwitcher;
