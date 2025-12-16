import { useState } from "react";

export default function FlexCode({ controls }) {
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
  } = controls;

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  const checkCount = Number(count) || 0;
  const cells = Array.from({ length: checkCount });

  const cssCode = `
.flex {
  display: flex;
  flex-direction : ${flexDirection};
  flex-wrap: ${flexWrap};
  justify-content: ${justifyContent};
  align-content: ${alignContent};
}

.flex-item {
   ${styled ? `padding: ${padding}px;` : "padding: 4px;"}
   ${styled ? `width: ${itemWidth}px;` : "width: 50px;"}
   ${styled ? `height: ${itemHeight}px;` : "height: 100px;"}
   ${
     styled ? `background-color: ${bgColor};` : "background-color: transperent;"
   }
   ${
     styled ? `border: ${borderColor};` : "border: 1px dashed rgba(0,0,0,0.25);"
   }
   ${styled ? `border-radius:${borderRadius}px;` : "border-radius: 0px;"}
   box-sizing: ${boxSizing};
   ${shadow ? "box-shadow: 0 4px 10px rgba(0,0,0,0.15);" : ""}
}
`.trim();

  return (
    <section className="mt-8 space-y-6">
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
            className="flex-grid-item"
            style={{
              padding: styled ? `${padding}px` : "4px",
              width: styled ? `${itemWidth}px` : "50px",
              height: styled ? `${itemHeight}px` : "100px",
              backgroundColor: styled ? bgColor : "transparent",
              color: styled ? "#d5e6ab" : "#555",
              border:
                styled && border
                  ? `${borderColor}`
                  : "1px dashed rgba(0,0,0,0.25)",
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
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm opacity-70">Generated CSS</span>

          <button
            onClick={handleCopy}
            className="text-sm px-3 py-1 rounded-md
               bg-[#193a3c] text-[#d5e6ab]
               hover:opacity-90 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        {cssCode}
      </pre>
    </section>
  );
}
