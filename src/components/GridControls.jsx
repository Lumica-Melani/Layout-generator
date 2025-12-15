export default function GridControls({ controls, onChange, onGenerate }) {
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

      <button onClick={onGenerate}>Generate</button>
    </div>
  );
}
