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
    shadow,
  } = config;

  const cellCount = rows * cols;
  const cells = Array.from({ length: cellCount });

  const cssCode = `
.grid {
  display: grid;
  grid-template-columns: repeat(${cols}, ${itemWidth}px);
  gap: ${gap}px;
  justify-content: ${justifyContent};
  align-content: ${alignContent};
}

.grid-item {
  width: ${itemWidth}px;
  height: ${itemHeight}px;
  padding: ${padding}px;
  background-color: ${bgColor};
  ${border ? "border: 1px solid #193A3C;" : ""}
  ${shadow ? "box-shadow: 0 4px 10px rgba(0,0,0,0.15);" : ""}
}
`.trim();

  return (
    <section className="mt-8 space-y-6">
      {/* Grid Preview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${itemWidth}px)`,
          gap: `${gap}px`,
          justifyContent,
          alignContent,
        }}
      >
        {cells.map((_, index) => (
          <div
            key={index}
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              padding: `${padding}px`,
              backgroundColor: bgColor,
              border: border ? "1px solid #193A3C" : "none",
              boxShadow: shadow ? "0 4px 10px rgba(0,0,0,0.15)" : "none",
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
