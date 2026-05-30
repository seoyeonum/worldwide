import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import CityList from './components/CityList';
import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8000';
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path="countries" element={<p>Countries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

////////////////////////////////////////

// ※ Routing (Client-Side Routing)?
// - With routing, we matvh different URLs to different UI views(REact components): routes
// - This enables users to navigate betwwen different applications screens, using the browser URL
// - Keeps the UI sync with the current browser URL
// - Allows us to build Single-Page-Applications
// (in case React → using React Router)

// ※ Single-Page Application (SPA)
// - Application that is executed entirely on the client (browsers)
// - Routes: different URLs correspond to different views (components)
// - JavaScript (React) is used to update the page (DOM)
// - This page is never reloaded
// - Feels like a native app
// - Additional data might be loaded from a web API

// ※ router 패키지 설치
// npm i react-router-dom

// ※ CSS Modules
// CSS 모듈은 create-react-app이나 vite 안에 이미 포함되어 있기에
// 별도의 패키지 설치가 필요하지 않다.
