import { useEffect, useContext, useState } from 'react';
import CanvasContext from '../context/CanvasContext';

function Canvas() {
  // Setup context
  const { canvasoptions, activeColor } = useContext(CanvasContext);

  // Set up state for pixels inside canvas
  const [pixelCount, setPixelCount] = useState(0);

  // Draw fucntions which changes the background of canvas-pixels
  // Gets triggered on mouse over on pixel
  const handleDraw = (e) => {
    // Check if left Mousebutton is clicked
    if (e.buttons === 1) {
      e.currentTarget.style.background = activeColor;
    }
  };

  // UseEffect is used to calculate the canvas intitially and on statechange
  useEffect(() => {
    // set height amd width of canvas
    document.getElementById(
      'canvas'
    ).style.cssText = `width: ${canvasoptions.width}px; height: ${canvasoptions.height}px;`;

    // Calculate pixelnumber as close as possible to fill canvas
    // Problem here is that the pixel width/height doesn't fit the canvas excactly depending on userinput
    // E.g. 400/12 = 33,333, means we will have free space and a number of pixels that won't fit
    // Solution: round off value and make it visually fit the best with css-flex
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
