import './index.css'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import React from 'react'
import Layout from './layout.jsx'

import Stations from './components/pages/Stations.jsx'
import About from './components/pages/about.jsx'
import Contact from './components/pages/contact.jsx'
import GetStarted from './components/pages/getStarted.jsx'
import Home from './components/spa/Home.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Stations' element={<Stations />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='getStarted' element={<GetStarted />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
