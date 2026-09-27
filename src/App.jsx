import './css/App.css'
import NavBar  from './componets/NavBar'
import Home from "./pages/home"
import Favorites from "./pages/favorites"
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </div>
  ) 
}

export default App
