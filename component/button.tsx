import React from "react";
import {ButtonProps} from '../types/types'

const Button: React.FC<ButtonProps> = ({ icon,word,className}) => {
    return (
        <div className={` ${className}`}>
            <image className={`${icon}`}></image>
            <button className={`${icon}`}>{word}</button>
        </div>
    );
};

export default Button;
