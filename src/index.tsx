import { render } from 'react-dom'
import App from './App'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'

render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
