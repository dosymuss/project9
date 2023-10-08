import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from "./pages/ArticlesPage"
import ArtDetalPage from './pages/ArtDetalPage';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element = {<HomePage/>}/>
  <Route path='/art' element = {<ArticlesPage/>}/>
    <Route path='/artdetal' element={<ArtDetalPage/>}/>
</Routes>
    </div>
  );
}

export default App;
