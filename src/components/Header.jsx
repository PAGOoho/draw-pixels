import { useContext, useRef } from 'react';

import CanvasContext from '../context/CanvasContext';

function Header() {
  // Setup context
  const { canvasoptions, setCanvasOptions, clearCanvas } =
    useContext(CanvasContext);

  // Setup Refs to access userinput
  const widthRef = useRef();
  const heightRef = useRef();
  const pixelsizeRef = useRef();

  // Set Canvas-Options
  // Is triggered on click on set-button
  const setCanvas = () => {
    setCanvasOptions(
      widthRef.current.value,
      heightRef.current.value,
      pixelsizeRef.current.value
    );
  };

  // Clear Canvas
  // Is triggered on click on clear-button
  const handleClear = () => {
    clearCanvas();
  };

  return (
    <header>
      <h2>Canvas Options</h2>
      <p>Adjust the canvas to your liking.</p>
      <div>
        <label htmlFor="canvaswidth">Width (1-1920)</label>
        <input
          id="canvaswidth"
          type="number"
          min={1}
          max={1920}
          ref={widthRef}
          placeholder={canvasoptions.width}
          defaultValue={canvasoptions.width}
        />
        <label htmlFor="canvasheight">Height (1-1080)</label>
        <input
          id="canvasheight"
          type="number"
          min={1}
          max={1080}
          ref={heightRef}
          placeholder={canvasoptions.height}
          defaultValue={canvasoptions.height}
        />
        <label htmlFor="pixelsize">Pixel Size (1-80)</label>
        <input
          id="pixelsize"
          type="number"
          min={1}
          max={80}
          ref={pixelsizeRef}
          placeholder={canvasoptions.pixelsize}
          defaultValue={canvasoptions.pixelsize}
        />
      </div>
      <div>
        <button className="btn" onClick={setCanvas}>
          Set Canvas
        </button>
        <button className="btn" onClick={handleClear}>
          Clear Canvas
        </button>
      </div>
      <i>Important: Adjusting these parameters will reset the canvas.</i>
    </header>
  );
}

export default Header;
