import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,     // Cache trong 5 phút
            retry: 1,                     // Thử lại 1 lần nếu fail
            refetchOnWindowFocus: false, // Không tự động refetch khi quay lại tab
            refetchOnReconnect: false,   // Không refetch khi mất mạng rồi khôi phục
        },
        mutations: {
            retry: 0,
        },
    },
});
