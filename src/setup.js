import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import LeaguePage from "./LeaguePage";
import ScrollToTop from "./ScrollToTop";
import Standings from "./standings";
import Highlights from "./highlights";
import Matches from "./matches";
import Teams from "./teams";
import TeamsSquad from "./teams-squad";

const Setup = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/standings/:league" children={<Standings />} />
        <Route path="/highlights/:name" children={<LeaguePage />}></Route>
        <Route path="/teams/:id" children={<TeamsSquad />} />
        <Route path="/highlights">
          <Highlights />
        </Route>
        <Route path="/matches">
          <Matches />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
      </Switch>
    </Router>
  );
};

export default Setup;
