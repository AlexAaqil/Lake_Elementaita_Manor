import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './containers/Homepage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <BrowserRouter>        
        <ScrollToTop />
        <Routes>          
          <Route path="/" element={ <Homepage /> } />
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
