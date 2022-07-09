import React, {FC, InputHTMLAttributes} from "react";
import "./Input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

const Input: FC<Props> = (props) => {

  return (
    <div>
      <input {...props}/>
    </div>
  )
}

export default Input