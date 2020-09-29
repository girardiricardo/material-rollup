import React from "react";
import { Button } from "material-rollup";
import IconButtonMUI from "@material-ui/core/IconButton";
import GamepadIcon from "@material-ui/icons/Gamepad";
// import ButtonMUI from "@material-ui/core/Button";

const App: React.FC = () => {
  return (
    <>
      <Button>Text button</Button>
      <IconButtonMUI>
        <GamepadIcon />
      </IconButtonMUI>
      {/*
        IconButton from 'material-rollup'
        <IconButton /> 
      */}
      {/* 
        ButtonMUI from '@material-ui/core/Button'
        <ButtonMUI variant="contained" color="secondary">
          Text button
        </ButtonMUI> 
      */}
    </>
  );
};

export default App;
