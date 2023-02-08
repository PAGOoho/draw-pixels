import { CanvasProvider } from './context/CanvasContext';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <>
      <CanvasProvider>
        <Home />
        <ToastContainer />
      </CanvasProvider>
    </>
  );
}

export default App;
