import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CompanyProfile from './components/CompanyProfile/CompanyProfile';
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/companyProfile' element={<CompanyProfile/>}></Route>
        <Route path='/productDetails/:name' element={<ProductDetails key={'id'}/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
