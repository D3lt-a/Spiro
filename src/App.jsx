import './App.css'
import Header from './components/spa/header'
import Favicon from 'react-favicon'
import favicon from '../src/assets/favicon.ico'

function App() {

  return (
    <>
      <Header />
      <Favicon url= {favicon} />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
