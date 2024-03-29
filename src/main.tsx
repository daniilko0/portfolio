import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/700.css"
import 'react-tooltip/dist/react-tooltip.css'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
