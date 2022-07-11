import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}
declare const Input: FC<Props>;
export default Input;
