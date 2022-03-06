import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Place.css";
import "./Styles/Grid.css";
import "./Styles/Game.css";
import "./Styles/HomePage.css";
import "./Styles/App.css";
import Game from "./Components/Game";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContextDataProvider from "./Contexts/ContextData";

function App() {
  return (
    <ContextDataProvider>
      <div className="App">
        <div className="page-content">
          <BrowserRouter>
            <Switch>
              <Route path="/Home">
                <HomePage />
              </Route>
              <Route path="/Game/:type">
                <Game />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </ContextDataProvider>
  );
}

export default App;
