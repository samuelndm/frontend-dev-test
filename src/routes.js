import { HashRouter, Switch, Route } from "react-router-dom";
import * as P from "./pages";
import * as C from "./components";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <C.Navbar />
      <Switch></Switch>
    </HashRouter>
  );
};

export default Routes;
