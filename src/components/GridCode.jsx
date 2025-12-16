import { useState } from "react";
import { Editor } from "@monaco-editor/react";

export default function GridCode({ controls }) {
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
    styled,
  } = controls;

  const cellCount = rows * cols;
  const cells = Array.from({ length: cellCount });

  const hasItems = cellCount > 0;

  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

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
  ${styled ? `padding: ${padding}px;` : "padding: 4px;"}
  ${styled ? `width: ${itemWidth}px;` : "width: 50px;"}
  ${styled ? `height: ${itemHeight}px;` : "height: 100px;"}
  ${styled ? `background-color: ${bgColor};` : "background-color: transperent;"}
  ${styled ? `border: ${borderColor};` : "border: 1px dashed rgba(0,0,0,0.25);"}
  ${styled ? `border-radius:${borderRadius}px;` : "border-radius: 0px;"}
   box-sizing: ${boxSizing};
  ${shadow ? "box-shadow: 0 4px 10px rgba(0,0,0,0.15);" : ""}
}
`.trim();

  return (
    <section className="mt-8 space-y-6">
      <div
        className="relative"
        style={{
          minHeight: "400px",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${itemWidth}px)`,
          gridTemplateRows: `repeat(${rows}, ${itemHeight}px)`,
          gap: `${gap}px`,
          justifyContent,
          alignContent,
        }}
      >
        {hasItems ? (
          cells.map((_, index) => (
            <div
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
          ))
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[#193a3c]/60">
            Adjust controls to see live preview
          </div>
        )}
      </div>

      {/* CSS Output */}
      <div className="rounded-t-lg overflow-hidden border border-gray-700 mb-5">
        {/* Header */}
        <div className="flex justify-between items-center px-3 py-2 bg-[#1e1e1e]">
          <span className="text-sm text-gray-300">Generated CSS</span>

          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 rounded-md
                 bg-[#193a3c] text-[#d5e6ab]
                 hover:opacity-90 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Monaco Editor */}
        <Editor
          height="300px"
          language="css"
          value={cssCode}
          theme="vs-dark"
          options={{
            readOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            wordWrap: "on",
          }}
        />
      </div>
    </section>
  );
}
