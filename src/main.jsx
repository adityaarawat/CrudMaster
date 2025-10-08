import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(
   <>
   <App />
    <ToastContainer
        position="top-center"      // top center
        autoClose={3000}           // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "16px", fontWeight: "bold" }} // inline CSS styling
      />
   </> 
)
