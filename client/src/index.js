import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import {Provider} from 'react-redux';
import {store} from './store'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StyledEngineProvider injectFirst >
//     <React.StrictMode>
//       <BrowserRouter>
//           <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   </StyledEngineProvider>
// );

ReactDOM.render(
  <Provider store = {store}> 
    <StyledEngineProvider injectFirst>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </StyledEngineProvider>,
  </Provider>,
  document.getElementById('root')
);


