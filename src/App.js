import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/home/Home';
import About from 'components/about/About';

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Switch>
  </Router>
  );


export default App;
