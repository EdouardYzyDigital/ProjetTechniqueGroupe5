import { Routes, Route } from 'react-router-dom';
import Login from './views/login/';
import SignIn from './views/signin';
import Footer from './components/Footer';
import NavbarHome from './components/Navbar';

function App() {
  return (
    <>
      <NavbarHome/>
      <Routes>
          <Route
            exact
            path='/'
            element={<Login/>}
          />
          <Route
            exact
            path='/signin'
            element={<SignIn/>}
          />
          <Route
            exact
            path='*'
            element={<h1>Error 404 not found ...</h1>}
          />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
