import { useState } from "react";
import GridControls from "../components/GridControls";
import GridCode from "../components/GridCode";

function GridGenerator() {
  const [controls, setControls] = useState({
    rows: "",
    cols: "",
    gap: 8,

    itemWidth: 100,
    itemHeight: 100,

    justifyContent: "start",
    alignContent: "start",

    padding: 8,
    bgColor: "#D5E6AB",
    border: true,
    shadow: false,
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
      itemWidth: controls.itemWidtht,
      itemHeight: controls.itemHeight,
      justifyContent: controls.justifyContent,
      alignContent: controls.alignContent,
      bgColor: controls.bgColor,
      border: controls.border,
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
