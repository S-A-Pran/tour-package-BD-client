
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewOrder from './components/AddNewOrder/AddNewOrder';
import AuthProvider from './Context/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Home/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
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
          <Route path = '/myorders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path = '/manageallorders'>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path = '/addnewplan'>
            <AddNewOrder></AddNewOrder>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
