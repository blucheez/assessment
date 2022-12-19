import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import NewUser from './pages/NewUser'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<NewUser />} />
        <Route path='/edit/:id' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
