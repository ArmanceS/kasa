import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesAndPaths from './routes/Routes'
import './index.css'
import "./style/normalize.css"
import "./style/stylesheet.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesAndPaths />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
