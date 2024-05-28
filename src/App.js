import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
