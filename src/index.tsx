import { render } from 'react-dom'
import App from './app/App'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { Suspense } from 'react'

import 'shared/config/i18/i18'
import './app/styles/index.scss'

render(
  <div>
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <Suspense fallback={ '' }>
              <App />
            </Suspense>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </div>,
  document.getElementById('root')
) // 37 16:00
