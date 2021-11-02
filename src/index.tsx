import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import lighTheme from './theme/variants/light'
import { StoreProvider } from './context/store/StoreContext'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: none;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={lighTheme}>
            <GlobalStyle />
            <StoreProvider>
                <App />
            </StoreProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
