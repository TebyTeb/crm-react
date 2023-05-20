import { createBrowserRouter } from 'react-router-dom'
// LAYOUTS
import Layout from '../components/Layout'
// PAGES
import NuevoCliente, { action as nuevoClienteAction} from '../pages/NuevoCliente'
import Index, { loader as clientesLoader } from '../pages/Index'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from '../pages/EditarCliente'
import { action as eliminarClienteAction } from '../components/Cliente'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
])

export default router
