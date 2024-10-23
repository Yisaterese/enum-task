import React from "react";
import {ButtonProps} from '../types/types'

const Button: React.FC<ButtonProps> = ({ word,className}) => {
    return (
        <div className={` ${className}`}>
            <button>{word}</button>
        </div>
    );
};

export default Button;
