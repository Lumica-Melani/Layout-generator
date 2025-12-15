export default function FlexCode({ config }) {
  const {
    count,
    flexDirection,
    flexWrap,
    gap,
    itemWidth,
    itemHeight,
    justifyContent,
    alignContent,
    padding,
    bgColor,
    border,
    borderRadius,
    borderColor,
    boxSizing,
    shadow,
    styled,
  } = config;

  const cellCount = count;
  const cells = Array.from({ length: cellCount });

  const cssCode = `
.flex {
  display: flex;
  flex-direction : ${flexDirection};
  flex-wrap: ${flexWrap};
  justify-content: ${justifyContent};
  align-content: ${alignContent};
}

.flex-item {
  padding: ${padding}px;
  width: ${itemWidth}px;
  height: ${itemHeight}px;
  background-color: ${bgColor};
  ${border ? `border: ${borderColor};` : ""}
  border-radius: ${borderRadius}px;
  box-sizing: ${boxSizing};
  ${shadow ? "box-shadow: 0 4px 10px rgba(0,0,0,0.15);" : ""}
}
`.trim();

  return (
    <section className="mt-8 space-y-6">
      {/* Grid Preview */}
      <div
        style={{
          display: "flex",
          flexDirection,
          flexWrap,
          gap: `${gap}px`,
          justifyContent,
          alignContent,
          width: "100%",
          minHeight: "900px",
        }}
      >
        {cells.map((_, index) => (
          <div
            key={index}
            className="flex-item"
            style={{
              padding: styled ? `${padding}px` : "0",
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              backgroundColor: styled ? bgColor : "transparent",
              color: "#d5e6ab",
              border: styled && border ? `${borderColor}` : "none",
              borderRadius: styled ? `${borderRadius}px` : "0",
              boxShadow:
                styled && shadow ? "0 0 15px rgba(213,230,171,0.6)" : "none",
              boxSizing: `${boxSizing}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* CSS Output */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
        {cssCode}
      </pre>
    </section>
  );
}
