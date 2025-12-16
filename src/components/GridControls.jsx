export default function GridControls({
  controls,
  onChange,
  styled,
  onToggleStyled,
  onApplyPreset,
}) {
  return (
    <div>
      <input
        type="number"
        value={controls.rows}
        onChange={(e) => onChange("rows", e.target.value)}
        placeholder="Rows"
      />
      <input
        type="number"
        value={controls.cols}
        onChange={(e) => onChange("cols", e.target.value)}
        placeholder="Cols"
      />
      <input
        type="number"
        value={controls.itemWidth}
        onChange={(e) => onChange("itemWidth", e.target.value)}
        placeholder="Item width (px)"
      />

      <input
        type="number"
        value={controls.itemHeight}
        onChange={(e) => onChange("itemHeight", e.target.value)}
        placeholder="Item height (px)"
      />
      <input
        type="number"
        value={controls.borderRadius}
        onChange={(e) => onChange("borderRadius", e.target.value)}
        placeholder="Border radius"
      />

      <select
        value={controls.justifyContent}
        onChange={(e) => onChange("justifyContent", e.target.value)}
      >
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>

      <select
        value={controls.alignContent}
        onChange={(e) => onChange("alignContent", e.target.value)}
      >
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-sm opacity-70">Styles</span>

        <button
          onClick={onToggleStyled}
          className={`
      w-12 h-6 rounded-full
      flex items-center
      transition-all duration-300
      ${styled ? "bg-[#193a3c]" : "bg-gray-400"}
    `}
        >
          <span
            className={`
        w-5 h-5 bg-white rounded-full
        transition-all duration-300
        ${styled ? "translate-x-6" : "translate-x-1"}
      `}
          />
        </button>
      </div>

      <select
        onChange={(e) => onApplyPreset(e.target.value)}
        className="mt-4 p-2 rounded border"
      >
        <option value="">Choose preset</option>
        <option value="centered">Centered</option>
        <option value="spaced">Space Between</option>
        <option value="cards">Card Layout</option>
      </select>
    </div>
  );
}
