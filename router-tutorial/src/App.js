import './App.css';
import Home from './Home';
import About from './About';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';
import HistorySample from './HistorySample';
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동 프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
};

export default App;
