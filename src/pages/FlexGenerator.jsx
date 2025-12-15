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

  const [flexConfig, setFlexConfig] = useState(null);

  function updateControls(name, value) {
    setFlexControls((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleGenerate() {
    setFlexConfig({
      count: flexcontrols.count,
      flexDirection: flexcontrols.flexDirection,
      flexWrap: flexcontrols.flexWrap,
      gap: flexcontrols.gap,
      padding: flexcontrols.padding,
      itemWidth: Number(flexcontrols.itemWidth),
      itemHeight: Number(flexcontrols.itemHeight),
      justifyContent: flexcontrols.justifyContent,
      alignContent: flexcontrols.alignContent,
      bgColor: flexcontrols.bgColor,
      border: flexcontrols.border,
      borderColor: flexcontrols.borderColor,
      boxSizing: flexcontrols.boxSizing,
      borderRadius: flexcontrols.borderRadius,
      shadow: flexcontrols.shadow,
    });
  }
  return (
    <>
      <FlexControls
        controls={flexcontrols}
        onChange={updateControls}
        onGenerate={handleGenerate}
      />
      {flexConfig && <FlexCode config={flexConfig} />}
    </>
  );
}

export default FlexGenerator;
