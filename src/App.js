import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SideBar from "./layout/SideBar/SideBar";
import NavigationBar from "./layout/NavBar/NavBar";
import Home from "./view/Home/Home";
import "./App.css";
import LayoutLeftMenu from "./view/Layout/LayoutLeftMenu";

class App extends Component {
  render() {
    const currentPath = window.location.href;

    return (
      <div className="container-fluid">
        <div className="row">
          {currentPath.includes("LayoutLeftMenu") ? (
            <NavigationBar />
          ) : (
            <SideBar />
          )}
          <div className="right-column">
            {currentPath.includes("LayoutLeftMenu") ? (
              <SideBar />
            ) : (
              <NavigationBar />
            )}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/layout-left-menu-hidden" /* TEM QUE FICAR */
                component={LayoutLeftMenu}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
