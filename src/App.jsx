import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import CityList from './components/CityList';
import CountryList from './components/CountryList';

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
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
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

// ※ Fake server 구축
// - npm i json-server
// - package.json script에 아래 문구 추가
// "server": "json-server --watch data/cities.json --port 8000 --delay 500"
// - npm run server

// ※ The URL for state management
// - URL은 UI state를 저장하기 좋은 최적의 장소이며, 몇몇 상황의 경우 useState의 대안이다.
// e.g. open/closed panels, currently selected list item, list sorting order, applied list filters

// 1) app의 모든 components 가 접근 가능한 전역 위치(global place)에 state를 저장하는 쉬운 방법이다.
// 2) 다음 페이지에 data를 pass하는 적합한 방법이다.
// 3) 페이지를 공유하거나 북마크할 당시의 UI 상태를 북마크하거나 공유할 수 있다.

// ※ Params and query string
// www.example.com/app/cities/lisbon?lat=38.728&lng=-9.141
// - params: lisbon
// - query string: lat=38.728&lng=-9.141
