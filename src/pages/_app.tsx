import {QueryProvider, EmotionRegistry} from '@libs/providers';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {theme} from '@libs/configs';
import {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <EmotionRegistry>
            <ThemeProvider theme={theme}>
                <QueryProvider>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </QueryProvider>
            </ThemeProvider>
        </EmotionRegistry>
        </body>
        </html>
    )
}