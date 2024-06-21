import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';

function App() {

  return (
    <div>
      {/* 라우터 설정  */}
      <HashRouter>

        {/* HomveView를 링크로 보여줄께 */}
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
