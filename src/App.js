import { Link } from 'react-router-dom';
import './App.css';
import Test from './page/main/Test.js';
import Side from './page/side/Side';
import { Route, Routes } from 'react-router-dom';
import Coin from './page/coin/Coin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/coin'} element={<Coin />} />
        <Route path={'/side'} element={<Side />} />
        <Route path={'/test'} element={<Test />} />
      </Routes>
      <Link to="/test">{'클릭하면 테스트'}</Link>
      <br />
      <Link to="/side">{'클릭하면 노트'}</Link>
      <br />
      <Link to="/coin">{'클릭하면 코인'}</Link>
    </div>
  );
}

export default App;
