import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ThemeProvider } from '@/context/ThemeProvider'; 
import { Container } from '@/components/Container';
import { EngineMap } from '@/components/EngineMap';

const EngineDetails = lazy(() => import('@/pages/EngineDetails/EngineDetails.tsx'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <EngineMap />
              </Container>
            }
          />
          <Route
            path="/engine/:id"
            element={
              <Container>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <EngineDetails />
                </Suspense>
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
