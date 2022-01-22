import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigationPage from "./pages/MainNavigationPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainNavigationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
