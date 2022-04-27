import { Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact_us from './components/contact_us/Contact_us';
import Contenus from './components/contenus/Contenus';
import Footer from './components/footer/Footer';
import Greeting from './components/greeting/Greeting';
import Home from './components/home/Home';
import Navbar from './components/navigation/Navbar';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Greeting} />
        <Route exact path="/home"component={Home}/>
        <Route exact path="/signup"component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/services" component={Contenus} />
        <Route exact path="/contactus" component={Contact_us} />
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
