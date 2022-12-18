import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<Main />} />
        <Route path='/edit/:id' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
