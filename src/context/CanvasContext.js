import { createContext, useState } from 'react';

import { toast } from 'react-toastify';

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const [canvasoptions, setCanvasoptions] = useState({
    width: 400,
    height: 400,
    pixelsize: 12,
  });
  const [colors, setColors] = useState([
    '#ffffff',
    '#000000',
    '#666666',
    '#292929',
    '#ec8f00',
    '#002907',
    '#420e07',
    '#810000',
  ]);
  const [activeColor, setActiveColor] = useState('#ffffff');

  let timedOut;

  const timeOutHelper = (msg, type) => {
    if (!timedOut) {
      type === 'success' ? toast.success(msg) : toast.error(msg);
      setTimeout(function () {
        timedOut = false;
      }, 5000);
    }
    timedOut = true;
  };

  const clearCanvas = () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((box) => (box.style.background = '#666'));
  };

  const setCanvasOptions = (width, height, pixelsize) => {
    if (
      width >= 1 &&
      width <= 1920 &&
      height >= 1 &&
      height <= 1080 &&
      pixelsize >= 1 &&
      pixelsize <= 80
    ) {
      setCanvasoptions({
        width: width,
        height: height,
        pixelsize: pixelsize,
      });
      timeOutHelper('Canvas sucessfully adjusted.', 'success');
      clearCanvas();
    } else {
      timeOutHelper('Please stay inside the given Parameters!');
    }
  };

  const updateActiveColor = (color) => {
    setActiveColor(color);
  };

  const addColor = (newcolor) => {
    // Regular expression checking if validate except for #
    const hexreg = /[0-9A-F]{6}$/i;

    if (!hexreg.test(newcolor)) {
      timeOutHelper('This is not a valid Hexcode.');
    } else if (colors.includes(newcolor)) {
      timeOutHelper('This Color already exists.');
    } else if (newcolor.length === 6 && !newcolor.includes('#')) {
      const correctedcolor = '#' + newcolor;
      if (!colors.includes(correctedcolor)) {
        setColors([...colors, correctedcolor]);
        timeOutHelper('Color has been added.', 'success');
      } else {
        timeOutHelper('This Color already exists.');
      }
    } else {
      setColors([...colors, newcolor]);
      timeOutHelper('Color has been added.', 'success');
    }
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasoptions,
        colors,
        activeColor,
        setCanvasOptions,
        clearCanvas,
        updateActiveColor,
        addColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasContext;
