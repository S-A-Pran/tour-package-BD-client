
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path = '/contact'>
            <Contact></Contact>
          </Route>
          <Route path = '/about'>
            <About></About>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
