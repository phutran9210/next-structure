// src/styles/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2', // màu xanh MUI mặc định
        },
        secondary: {
            main: '#9c27b0',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '"Inter"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: { fontWeight: 700 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 700 },
        button: {
            textTransform: 'none', // giữ nguyên chữ thường/thường dùng với Inter
        },
    },
    shape: {
        borderRadius: 12, // bo góc nhẹ nhàng
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;
