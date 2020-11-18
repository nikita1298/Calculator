import logo from './logo.svg';
import './App.css';
import Display from './Components/Calculator/Calculator';
import View from './Components/FAQ/View';
import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Display} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
