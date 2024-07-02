// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import "./App.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { MyContextProvider } from './context/context.jsx';

ReactDOM.render(
    <MyContextProvider>
        <App/> 
    </MyContextProvider> 
,document.getElementById('root'))
