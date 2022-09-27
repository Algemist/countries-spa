import Header from "./components/Header";
import Main from "./components/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import {useState} from "react";
function App() {
    const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
            <Route path='/' element={<Navigate to='/countries-spa' />} />
            <Route path='/countries-spa' element={<HomePage countries={countries} setCountries={setCountries}/>} />
            <Route path="countries-spa/country/:name" element={<Details />}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
