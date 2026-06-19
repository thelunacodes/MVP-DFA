import './App.css'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import ProductPage from './Pages/ProductPage/ProductPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UserProvider } from './UserContext'
import { ProductProvider } from './ProductContext'


export default function App() {
  return (
    <>
      <BrowserRouter> 
        <ProductProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}


