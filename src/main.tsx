import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app/App'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/globals.css'
import '@/styles/agency-harmony.css'
import '@/styles/footer-socials.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
