import { render } from 'react-dom'
import App from './app/App'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18/i18'

render(
  <div>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
