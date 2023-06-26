import { Routes, Route } from 'react-router-dom';
import Login from './views/login/';
import SignIn from './views/signin';
import Footer from './components/Footer';
import  logo  from './images/MaxAirain2.png'

function App() {
  return (
    <>
      <img src={logo} alt="" style={{width:"250px", height:"75px", marginLeft:"30px", marginTop:"10px"}}/>
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
