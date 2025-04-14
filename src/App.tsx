import { Routes, Route, HashRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ThemeProvider } from '@/context/ThemeProvider'; 
import { Container } from '@/components/Container';
import { EngineMap } from '@/components/EngineMap';

const EngineDetails = lazy(() => import('@/pages/EngineDetails/EngineDetails.tsx'));

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
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
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
