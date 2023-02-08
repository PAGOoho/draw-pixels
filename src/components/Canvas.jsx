import { useEffect, useContext, useState } from 'react';
import CanvasContext from '../context/CanvasContext';

function Canvas() {
  const { canvasoptions, activeColor } = useContext(CanvasContext);
  const [pixelCount, setPixelCount] = useState(0);

  const handleDraw = (e) => {
    // Check if left Mousebutton is clicked
    if (e.buttons === 1) {
      e.currentTarget.style.background = activeColor;
    }
  };

  useEffect(() => {
    document.getElementById(
      'canvas'
    ).style.cssText = `width: ${canvasoptions.width}px; height: ${canvasoptions.height}px;`;

    setPixelCount(
      Math.floor(
        (canvasoptions.width * canvasoptions.height) /
          Math.pow(canvasoptions.pixelsize, 2)
      )
    );
  }, [canvasoptions]);

  return (
    <section className="canvas-wrap">
      <h2>Canvas</h2>
      <p>Draw by holding the left mousebutton.</p>
      <div id="canvas">
        {Array(pixelCount)
          .fill(canvasoptions.pixelsize)
          .map((_, key) => (
            <div
              key={key}
              className="pixel"
              style={{ flexBasis: canvasoptions.pixelsize + 'px' }}
              onMouseOver={handleDraw}
            ></div>
          ))}
      </div>
    </section>
  );
}

export default Canvas;
