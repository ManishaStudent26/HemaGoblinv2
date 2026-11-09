import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import TopBar from './assets/components/TopBar.jsx';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <TopBar/>
    </StyledEngineProvider>
    <App/>
  </React.StrictMode>,
)
