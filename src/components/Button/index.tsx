import React, { ReactElement } from 'react';
import "./styles.css";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (<button className="button">{label}</button>);
};

export default Button;
