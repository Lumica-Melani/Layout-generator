export default function GridControls({
  controls,
  onChange,
  styled,
  onToggleStyled,
  onApplyPreset,
}) {
  return (
    <div className="bg-[#0f1f22] text-[#d5e6ab] p-6 rounded-xl space-y-6 shadow-lg mt-4">
      {/* Header */}
      <h2 className="text-lg font-semibold tracking-wide">Grid Controls</h2>

      {/* Rows / Cols */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          value={controls.rows}
          onChange={(e) => onChange("rows", e.target.value)}
          placeholder="Rows"
          className="control-input"
        />

        <input
          type="number"
          value={controls.cols}
          onChange={(e) => onChange("cols", e.target.value)}
          placeholder="Columns"
          className="control-input"
        />
      </div>

      {/* Item size */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          value={controls.itemWidth}
          onChange={(e) => onChange("itemWidth", e.target.value)}
          placeholder="Item width"
          className="control-input"
        />

        <input
          type="number"
          value={controls.itemHeight}
          onChange={(e) => onChange("itemHeight", e.target.value)}
          placeholder="Item height"
          className="control-input"
        />
      </div>

      {/* Border radius */}
      <input
        type="number"
        value={controls.borderRadius}
        onChange={(e) => onChange("borderRadius", e.target.value)}
        placeholder="Border radius"
        className="control-input"
      />

      {/* Alignment */}
      <div className="grid grid-cols-2 gap-4">
        <select
          value={controls.justifyContent}
          onChange={(e) => onChange("justifyContent", e.target.value)}
          className="control-select"
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
          className="control-select"
        >
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      {/* Styles toggle */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm opacity-70">Styles</span>

        <button
          onClick={onToggleStyled}
          className={`w-12 h-6 rounded-full flex items-center
            transition-all duration-300
            ${styled ? "bg-[#3f7f87]" : "bg-gray-500"}`}
        >
          <span
            className={`w-5 h-5 bg-white rounded-full transition-all duration-300
              ${styled ? "translate-x-6" : "translate-x-1"}`}
          />
        </button>
      </div>

      {/* Presets */}
      <select
        onChange={(e) => onApplyPreset(e.target.value)}
        className="control-select"
      >
        <option value="">Choose preset</option>
        <option value="centered">Centered</option>
        <option value="spaced">Space Between</option>
        <option value="cards">Card Layout</option>
      </select>
    </div>
  );
}
