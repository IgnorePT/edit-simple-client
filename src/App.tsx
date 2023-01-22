import { Route, Routes } from 'react-router-dom'
import './styles/shared.scss'
import Header from './components/Layout/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'


function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
        </Routes>


      </div>
    </>
  )
}

export default App
