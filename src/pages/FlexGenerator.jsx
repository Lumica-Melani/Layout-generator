import { useState } from "react";
import FlexControls from "../components/FlexControls";
import FlexCode from "../components/FlexCode";

function FlexGenerator() {
  const [flexcontrols, setFlexControls] = useState({
    count: "",
    flexDirection: "",
    flexWrap: "",
    gap: "",

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

  const [warning, setWarning] = useState("");

  function updateControls(name, value) {
    setFlexControls((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "count") {
      if (Number(value) > 20) {
        setWarning("Large number of items may affect preview clarity");
      } else if (Number(value) > 5) {
        setWarning(
          "Large number of items without wrap may affect preview clarity"
        );
      } else {
        setWarning("");
      }
    }
  }

  function handleBlur() {
    setWarning("");
  }

  const [styled, setStyled] = useState(true);

  function toggleStyled() {
    setStyled((prev) => !prev);
  }

  const FLEX_PRESETS = {
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
    const preset = FLEX_PRESETS[presetKey];
    if (!preset) return;

    setFlexControls((prev) => ({
      ...prev,
      ...preset,
    }));
  }

  return (
    <>
      <FlexControls
        controls={flexcontrols}
        warning={warning}
        onChange={updateControls}
        onCountBlur={handleBlur}
        styled={styled}
        onToggleStyled={toggleStyled}
        onApplyPreset={applyPreset}
      />
      <FlexCode controls={{ ...flexcontrols, styled }} />
    </>
  );
}

export default FlexGenerator;
