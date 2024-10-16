import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/organisms/Header';
import LoginPage from './pages/LoginPage';
import AuthCheck from './lib/Auth/AuthCheck';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Header />    
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/list' element={<ListPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route element={<AuthCheck />}>
          <Route path='/add' element={<AddPage />}/>
          <Route path='/edit/:id' element={<EditPage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
