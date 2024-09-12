import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodosContextProvider from './contexts/TodosContextProvider.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="a09743ee295242f08ec3c8c2bce8843a"
      domain="https://camilawebworks.kinde.com"
      redirectUri= {
	      process.env.NODE_ENV === "production"
	      ? "https://todo-app-two-rosy.vercel.app/"
	      : "http://localhost:5173"
      }
      logoutUri= {
	      process.env.NODE_ENV === "production"
	      ? "https://todo-app-two-rosy.vercel.app/"
	      : "http://localhost:5173"
      }
	  >
    <TodosContextProvider>
    <App />
    </TodosContextProvider>
    </KindeProvider>
  </StrictMode>,
)
