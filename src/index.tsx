import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './component/App';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

theme = createTheme(theme,{
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowY: 'overlay'
                },
                'body::-webkit-scrollbar': {
                    width: 16
                },
                'body::-webkit-scrollbar-thumb': {
                    minHeight: 64,
                    borderRadius: 8,
                    border: '4px solid transparent',
                    backgroundClip: 'content-box',
                    backgroundColor: theme.palette.action.hover
                },
                'body::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: theme.palette.action.selected
                },
                'body::-webkit-scrollbar-thumb:active': {
                    backgroundColor: theme.palette.action.disabled
                }
            }
        }
    }
})

createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        <App/>
    </ThemeProvider>
)
