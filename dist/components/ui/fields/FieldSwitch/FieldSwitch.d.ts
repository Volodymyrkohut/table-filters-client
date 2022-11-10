import { FC, InputHTMLAttributes } from 'react';
import './FieldSwitch.scss';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}
declare const FieldSwitch: FC<Props>;
export default FieldSwitch;
