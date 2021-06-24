import Header from './header';
import Products from './products'; 
import Footer from './footer';
import Head from './signUpIN/head';
import Foot from './signUpIN/foot';
import SignIn from './signUpIN/signIn';
import SignUp from './signUpIN/signUp';
import ProductDetails from './productsDetails';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
          <Products />
          <Footer />
        </Route>
        <Route exact path= "/SignIn">
          <Head />
          <SignIn />
          <Foot />
        </Route>
        <Route exact path = "/SignUp">
          <Head />
          <SignUp />
          <Foot />
          </Route>
          <Route exact path="/ProductDetails">
            <ProductDetails />
        </Route>
          </Switch>
      </Router>
      </>
  );
}

export default App;
