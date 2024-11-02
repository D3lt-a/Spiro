import Header from "./components/spa/header"
import Footer from "./components/spa/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout