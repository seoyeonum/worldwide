import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      {/* 고정적으로 출력하고 싶은 부분이 있다면 아래와 같이 추가 */}
      <h1>Hello Router!</h1>

      {/* 아래 부분은 url에 따라 route가 결정된다. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          {/* 와일드키(*)를 사용하면 위 케이스 외 모든 경로를 의미 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
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
