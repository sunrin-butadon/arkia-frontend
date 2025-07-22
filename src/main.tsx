import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import DatasetsView from './pages/datasets/DatasetsView';
import NotFound from './pages/exception/NotFound';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datasets/view/:datasetId" element={<DatasetsView />} />
          {/* 404 페이지 - 다른 모든 경로에 대해 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
