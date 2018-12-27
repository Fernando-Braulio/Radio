import React, { Component } from "react";

import Footer from "../../layout/Footer/Footer";
import Home from "../Home/Home";

class LayoutLeftMenu extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <Home />
        <div className="row mb-5">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default LayoutLeftMenu;
