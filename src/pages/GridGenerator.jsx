import { useState } from "react";
import GridControls from "../components/GridControls";
import GridCode from "../components/GridCode";

function GridGenerator() {
  const [controls, setControls] = useState({
    rows: "",
    cols: "",
    gap: 8,

    itemWidth: "",
    itemHeight: "",

    justifyContent: "",
    alignContent: "",

    padding: 8,
    bgColor: "#193a3c",
    border: true,
    borderColor: "2px solid rgba(213,230,171,0.6)",
    borderRadius: 0,
    boxSizing: "border-box",
    shadow: true,
  });

  function updateControls(name, value) {
    setControls((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [styled, setStyled] = useState(true);

  function toggleStyled() {
    setStyled((prev) => !prev);
  }

  return (
    <>
      <GridControls
        controls={controls}
        onChange={updateControls}
        styled={styled}
        onToggleStyled={toggleStyled}
      />
      <GridCode controls={{ controls, styled }} />
    </>
  );
}

export default GridGenerator;
