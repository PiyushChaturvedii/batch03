import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appTitle = "Person Manager" />
  </React.StrictMode>
);




// ReactDOM.render(<h1>Test</h1>, document.getElementById('root'));

// reportWebVitals();
