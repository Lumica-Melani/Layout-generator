export default function FlexControls({
  controls,
  onChange,
  onCountBlur,
  styled,
  onToggleStyled,
  warning,
  onApplyPreset,
}) {
  return (
    <div className="bg-[#0f1f22] text-[#d5e6ab] p-6 rounded-xl space-y-6 shadow-lg mt-4">
      {/* Header */}
      <h2 className="text-lg font-semibold tracking-wide">Flex Controls</h2>

      {/* Count */}
      <div className="space-y-1">
        <label className="text-sm opacity-70">Items</label>
        <input
          type="number"
          min={1}
          max={20}
          value={controls.count}
          onChange={(e) => onChange("count", e.target.value)}
          onBlur={onCountBlur}
          placeholder="Number of elements"
          className="w-full bg-[#132b2f] border border-[#244b50]
                     rounded-md px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-[#3f7f87]"
        />
        {warning && (
          <p className="text-xs text-yellow-400 mt-1">⚠️ {warning}</p>
        )}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-2 gap-4">
        <select
          value={controls.flexDirection}
          onChange={(e) => onChange("flexDirection", e.target.value)}
          className="control-select"
        >
          <option value="disabled">Flex Direction</option>
          <option value="row">row</option>
          <option value="column">column</option>
        </select>

        <select
          value={controls.flexWrap}
          onChange={(e) => onChange("flexWrap", e.target.value)}
          className="control-select"
        >
          <option value="disabled">Flex Wrap</option>
          <option value="wrap">wrap</option>
          <option value="nowrap">nowrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select>
      </div>

      {/* Size */}
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          value={controls.gap}
          onChange={(e) => onChange("gap", e.target.value)}
          placeholder="Gap"
          className="control-input"
        />

        <input
          type="number"
          value={controls.itemWidth}
          onChange={(e) => onChange("itemWidth", e.target.value)}
          placeholder="Width"
          className="control-input"
        />

        <input
          type="number"
          value={controls.itemHeight}
          onChange={(e) => onChange("itemHeight", e.target.value)}
          placeholder="Height"
          className="control-input"
        />
      </div>

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
          <option value="disabled">Justify Content</option>
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
          <option value="disabled">Align Content</option>
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      {/* Styles Toggle */}
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
