import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import Home from './pages/home/Home';
import './global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선 유지
      refetchOnWindowFocus: false, // 창 포커스 시 자동 리페치 방지
      retry: 1, // 실패 시 재시도 횟수
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </StrictMode>,
);
