import React from "react";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "pink"
};

const AboutMe = () => {
  return (
    <Rnd
      style={style}
      default={{
        x: 100,
        y: 100,
        width: 320,
        height: 200
      }}
    >
      About Me
    </Rnd>
  );
};

export default AboutMe;
