import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BlogProvider } from './core/provider/BlogProvider';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootContext = document.getElementById('root');

if(!rootContext){
  console.log("Root Element Not Found");
} else {
  const root = ReactDOM.createRoot(rootContext)
  
  root.render(
    <React.StrictMode>
      <BlogProvider>
          <App />
      </BlogProvider>
    </React.StrictMode>
  );
}
