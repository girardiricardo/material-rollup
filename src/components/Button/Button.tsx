import React from "react";
import ButtonMUI from "@material-ui/core/Button";

const Button: React.FC = ({ children }) => {
  return (
    <ButtonMUI variant="contained" color="primary">
      {children}
    </ButtonMUI>
  );
};

export default Button;
