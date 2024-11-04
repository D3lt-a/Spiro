import Header from "./components/spa/header"
import Footer from "./components/spa/Footer"
import { Outlet } from 'react-router-dom'
import Favicon from 'react-favicon'
import favicon from '../src/assets/favicon.ico'

function Layout() {
  return (
    <div className="bg-">
      <Favicon url= {favicon} />
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout