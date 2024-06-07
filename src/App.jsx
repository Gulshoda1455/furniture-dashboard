import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import GeneralLayout from './pages/GeneralLayout'

function App() {
  

  return (
    <>
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<GeneralLayout/>}>
          <Route index element={<Home/>}/>
          </Route>
            <Route path='/register' element={<Register/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
