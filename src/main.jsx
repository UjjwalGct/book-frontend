
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';   
// import './index.css';
// import { RouterProvider } from 'react-router-dom';
// import router from './routers/router.jsx';
// import AuthProvider from './contects/AuthProvider.jsx';
// import { ThemeProvider } from './components/ThemeContext.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//     <AuthProvider>
//        <ThemeProvider>
//   <RouterProvider router ={router}/>
//    </ThemeProvider>
//     </AuthProvider>
   
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import AuthProvider from "./contects/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        {/* ✅ App wraps everything so Navbar + Footer + Router share the same Theme */}
        
          <RouterProvider router={router} />
    
    </AuthProvider>
  </React.StrictMode>
);
