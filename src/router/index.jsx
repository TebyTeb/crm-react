import { createBrowserRouter } from 'react-router-dom'
// LAYOUTS
import Layout from '../components/Layout'
// PAGES
import NuevoCliente from '../pages/NuevoCliente'
import Index, { loader as clientesLoader } from '../pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  }
])

export default router
