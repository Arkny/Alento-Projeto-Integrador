// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = "60773016341-etfkrot34nudaod4dge0h6vejpk9e0dj.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>   
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
