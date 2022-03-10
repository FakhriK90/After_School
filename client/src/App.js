import { Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact_us from './components/contact_us/Contact_us';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navig from './components/navigation/Navig';
import Navigation from './components/navigation/Navigation';

import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navig/> */}
      <Navigation/>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/signup"component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/contactus" component={Contact_us} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
