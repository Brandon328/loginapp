import { BrowserRouter, useRoutes } from 'react-router-dom'
import Login from '../Login'
import Signup from '../Signup'
import Notfound from '../Notfound'
import Navbar from '../../Components/Navbar'
import './App.css'

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/*',
      element: <Notfound />
    },
  ])
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
