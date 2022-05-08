import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppApi from './AppApi';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootApp = () => {
  const [useApi, setUseApi] = useState(false);

  const toggleApi = () => {
    setUseApi(!useApi);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full my-2 mt-4">
        <label htmlFor="toogleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="sr-only"
              checked={useApi}
              onChange={toggleApi}
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
            Use API at PORT 3000
          </div>
        </label>
      </div>
      {useApi ? <AppApi /> : <App />}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
