import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/organisms/Header';
import PublicPage from './pages/Public';
import LoginPage from './pages/LoginPage';
import AuthCheck from './lib/AuthCheck';
import Private from './pages/Private';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PublicPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/private' element={<AuthCheck element={<Private />} />}/>
      </Routes>
    </>
  );
}

export default App;
