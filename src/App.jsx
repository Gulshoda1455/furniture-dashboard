import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import GeneralLayout from './pages/GeneralLayout';
import './App.css';
import Login from './pages/Auth/Login';
function App() {
  

  return (
    <>
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<GeneralLayout/>}>
          <Route index element={<Home/>}/>
          </Route>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login'   element={<Login/>}/>
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
