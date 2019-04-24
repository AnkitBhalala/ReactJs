import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import ExpenseDashbordPage from "../components/ExpenseDashBordPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import PageNotFound from "../components/PageNotFound";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={ExpenseDashbordPage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
