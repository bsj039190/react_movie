import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Detail />}>
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
