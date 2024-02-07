import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx'
import Appointment from './components/appointment/ListOfAppointments.jsx'
import ListOfServices from './components/services/ListOfServices.jsx'
import UserHome from './components/user/UserHome.jsx'
import './index.css'


const routesArray = createBrowserRouter([
  {
    path: '/',
    element: <UserHome />,
    errorElement: <div>error page</div>
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: 'services',
        element: <ListOfServices />
      },

      {
        path: 'appointments',
        element: <Appointment />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routesArray} />
  </React.StrictMode>,
)
