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

    justifyContent: "start",
    alignContent: "start",

    padding: 8,
    bgColor: "#193a3c",
    border: true,
    borderColor: "2px solid rgba(213,230,171,0.6)",
    borderRadius: 0,
    boxSizing: "border-box",
    shadow: true,
  });

  const [gridConfig, setGridConfig] = useState(null);

  function updateControls(name, value) {
    setControls((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleGenerate() {
    setGridConfig({
      rows: Number(controls.rows),
      cols: Number(controls.cols),
      gap: controls.gap,
      padding: controls.padding,
      itemWidth: Number(controls.itemWidth),
      itemHeight: Number(controls.itemHeight),
      justifyContent: controls.justifyContent,
      alignContent: controls.alignContent,
      bgColor: controls.bgColor,
      border: controls.border,
      borderColor: controls.borderColor,
      boxSizing: controls.boxSizing,
      borderRadius: controls.borderRadius,
      shadow: controls.shadow,
    });
  }

  return (
    <>
      <GridControls
        controls={controls}
        onChange={updateControls}
        onGenerate={handleGenerate}
      />
      {gridConfig && <GridCode config={gridConfig} />}
    </>
  );
}

export default GridGenerator;
