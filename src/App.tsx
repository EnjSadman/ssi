import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/organisms/Header';
import LoginPage from './pages/LoginPage';
import AuthCheck from './lib/Auth/AuthCheck';


function App() {
  return (
    <>
      <Header />
      
        <Routes>
          <Route path='/' element={<div />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/add' element={<AuthCheck element={<div />} />}/>
          <Route path='/edit' element={<AuthCheck element={<div />} />}/>
        </Routes>

    </>
  );
}

export default App;
