import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ContainerWrapper, MainWrapper } from '@/Styles.ts'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/about'
import Jobs from './pages/jobs'

const App = () => {
  return (
    <ContainerWrapper>
      <BrowserRouter>
        <Header />
        <MainWrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/jobs' element={<Jobs />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </ContainerWrapper>
  )
}

export default App