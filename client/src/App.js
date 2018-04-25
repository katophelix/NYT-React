import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch";
import SavedArticles from "./pages/savedArticle";


const App = () => (
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={articles} />
        <Route exact path="/SavedArticles" component={SavedArticles} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
