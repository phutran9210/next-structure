// src/app/index.tsx
'use client';

import { Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h3" gutterBottom>
                    Welcome to RR App
                </Typography>
                <Typography variant="body1" mb={4}>
                    Built with Next.js 15, MUI 7, React 19, React Query, Emotion, and more.
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </motion.div>
        </Container>
    );
}
