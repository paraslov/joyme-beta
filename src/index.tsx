import { render } from 'react-dom'
import App from './app/App'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { Suspense } from 'react'

import 'shared/config/i18/i18'
import './app/styles/index.scss'

render(
  <div>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <Suspense fallback={ '' }>
            <App />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
