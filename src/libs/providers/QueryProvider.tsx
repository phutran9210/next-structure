'use client';

import {ReactNode} from 'react';
import {QueryClientProvider, HydrationBoundary} from '@tanstack/react-query';
import {queryClient} from '@libs/configs';

interface Props {
    children: ReactNode;
}

export const QueryProvider = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* Dùng HydrationBoundary nếu bạn thêm SSR */}
            <HydrationBoundary state={{}}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    );
};