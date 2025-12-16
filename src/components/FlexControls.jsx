export default function FlexControls({
  controls,
  onChange,

  onCountBlur,
  styled,
  onToggleStyled,
  warning,
}) {
  return (
    <div>
      <input
        type="number"
        min={1}
        max={20}
        value={controls.count}
        onChange={(e) => onChange("count", e.target.value)}
        onBlur={onCountBlur}
        placeholder="Enter number of elements"
      />
      {warning && <p className="text-sm text-yellow-500 mt-2">⚠️ {warning}</p>}

      <select
        value={controls.flexDirection}
        onChange={(e) => onChange("flexDirection", e.target.value)}
      >
        <option value="row">row</option>
        <option value="column">column</option>
      </select>

      <select
        value={controls.flexWrap}
        onChange={(e) => onChange("flexWrap", e.target.value)}
      >
        <option value="wrap">wrap</option>
        <option value="nowrap">nowrap</option>
        <option value="wrap-reverse">wrap-reverse</option>
      </select>
      <input
        type="number"
        value={controls.gap}
        onChange={(e) => onChange("gap", e.target.value)}
        placeholder="Gap in px"
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
    </div>
  );
}
