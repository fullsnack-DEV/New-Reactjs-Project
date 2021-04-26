import Homepage from "./Pages/homepage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";

//Implementing a router so that we can route to the Different routes
//wrap our routes in between Switch

//routing done
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/create" exact component={CreatePage} />
      </Switch>
    </Router>
  );
}

export default App;
