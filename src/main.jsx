import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './providers/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalProvider>
         <BrowserRouter>
            <ChakraProvider>
               <App />
            </ChakraProvider>
         </BrowserRouter>
      </GlobalProvider>
  </React.StrictMode>,
)
