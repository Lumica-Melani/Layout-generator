export default function FlexControls({ controls, onChange, onGenerate }) {
  return (
    <div>
      <input
        type="number"
        value={controls.count}
        onChange={(e) => onChange("count", e.target.value)}
        placeholder="Enter number of elements"
      />
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

      <button onClick={onGenerate}>Generate</button>
    </div>
  );
}
