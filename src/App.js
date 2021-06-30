import React,{useEffect} from 'react'

import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Page/Home'
import Contact from './Page/Contact';
import Navbar from './Components/Navbar';
import Footer from '../src/Components/Footer'
import { keepTheme } from '../src/Components/Themes.js';
import MoreAbout from './Page/MoreAbout';

function App() {
  useEffect(() => {
    keepTheme();
})
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/about" component={MoreAbout}/>
       </Switch>
       <Footer/>
     </Router>
   
    </div>
  );
}

export default App;
