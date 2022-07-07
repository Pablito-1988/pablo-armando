
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
      <Footer />

      
    </div>
  );
}

export default App;
