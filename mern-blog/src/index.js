import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MyContextProvider } from './context/context';
ReactDOM.render(
    <MyContextProvider>
        <App/> 
    </MyContextProvider> 
,document.getElementById('root'))
