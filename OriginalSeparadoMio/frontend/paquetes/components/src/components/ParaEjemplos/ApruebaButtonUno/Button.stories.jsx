import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "A-Prueba/Button001",
};

export const Primary = () => (
  <Button/>
);

export const Secondary = () => (
  <Button>
    Secundario
  </Button>
);