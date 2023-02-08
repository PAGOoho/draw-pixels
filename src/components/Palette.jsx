import { useRef, useContext } from 'react';

import CanvasContext from '../context/CanvasContext';

function Palette() {
  const { colors, updateActiveColor, activeColor, addColor } =
    useContext(CanvasContext);

  const newcolor = useRef();

  const handleChoose = (color) => {
    updateActiveColor(color);
  };

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
