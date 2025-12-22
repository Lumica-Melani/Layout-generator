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
    borderRadius: "",
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

  const GRID_PRESETS = {
    centered: {
      justifyContent: "center",
      alignContent: "center",
      gap: 16,
    },

    spaced: {
      justifyContent: "space-between",
      alignContent: "center",
      gap: 24,
    },

    cards: {
      justifyContent: "start",
      alignContent: "start",
      gap: 20,
      itemWidth: 180,
      itemHeight: 120,
    },
  };

  function applyPreset(presetKey) {
    const preset = GRID_PRESETS[presetKey];
    if (!preset) return;

    setControls((prev) => ({
      ...prev,
      ...preset,
    }));
  }

  return (
    <>
      <GridControls
        controls={controls}
        onChange={updateControls}
        styled={styled}
        onToggleStyled={toggleStyled}
        onApplyPreset={applyPreset}
      />
      <GridCode controls={{ ...controls, styled }} />
    </>
  );
}

export default GridGenerator;
