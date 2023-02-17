import { useRef, useContext } from 'react';

import CanvasContext from '../context/CanvasContext';

function Palette() {
  // Setup context
  const { colors, updateActiveColor, activeColor, addColor } =
    useContext(CanvasContext);

  // Set Ref for user hexcode input
  const newcolor = useRef();

  // Change active color
  // Triggered on Click on color
  const handleChoose = (color) => {
    updateActiveColor(color);
  };

  // Add new color
  // Triggered on click on add button
  const handleAdd = () => {
    addColor(newcolor.current.value);
  };

  return (
    <section className="palette">
      <h2>Color Palette</h2>
      <p>Choose your color.</p>
      <div className="colorpicker">
        {colors.map((color, key) => (
          <div
            key={key}
            className={`color${color === activeColor ? ' active-color' : ''}`}
            style={{
              background: color,
            }}
            onClick={() => handleChoose(color)}
          ></div>
        ))}
      </div>
      <label htmlFor="newcolor">Add new color (Hexcode)</label>
      <input id="newcolor" type="text" ref={newcolor} maxlength="7" />
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </section>
  );
}

export default Palette;
