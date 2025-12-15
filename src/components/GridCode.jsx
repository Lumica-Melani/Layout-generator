export default function GridCode({ config }) {
  const {
    rows,
    cols,
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
  } = config;

  const cellCount = rows * cols;
  const cells = Array.from({ length: cellCount });

  const cssCode = `
.grid {
  display: grid;
  grid-template-columns: repeat(${cols}, ${itemWidth}px);
  grid-template-rows: repeat(${rows}, ${itemHeight}px);
  gap: ${gap}px;
  justify-content: ${justifyContent};
  align-content: ${alignContent};
}

.grid-item {
  padding: ${padding}px;
  background-color: ${bgColor};
  ${border ? `border:Co${borderColor};` : ""}
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
          height: "800px",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${itemWidth}px)`,
          gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
          gap: `${gap}px`,
          justifyContent,
          alignContent,
        }}
      >
        {cells.map((_, index) => (
          <div
            key={index}
            style={{
              padding: `${padding}px`,
              backgroundColor: bgColor,
              color: "#d5e6ab",
              border: border ? `${borderColor}` : "none",
              borderRadius: `${borderRadius}px`,
              boxShadow: shadow ? "0 0 15px rgba(213,230,171,0.6)" : "none",
              boxSizing: `${boxSizing}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
