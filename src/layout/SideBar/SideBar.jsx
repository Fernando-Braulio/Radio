import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";
import { qpRequiredMisc, qpLayoutControls } from "../../utils/misc";

class SideBar extends Component {
  componentDidMount() {
    qpRequiredMisc();

    /* Demo Only */
    qpLayoutControls();
  }

  render() {
    return (
      <nav id="sidebar" className="px-0 bg-dark bg-gradient sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="logo-nav-item">
            <Link className="navbar-brand" to="/">
              <img
                src="assets/img/logo-white.png"
                width="145"
                height="32.3"
                alt="RadioTALK"
              />
            </Link>
          </li>
          
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              <i className="batch-icon batch-icon-browser-alt" />
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="#"
            >
              <i className="batch-icon batch-icon-timeline" />
              Relatórios
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="#"
            >
              <i className="batch-icon batch-icon-star" />
              Sorteios
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="#"
            >
              <i className="batch-icon batch-icon-settings-alt" />
              Configurações
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="#"
            >
              <i className="batch-icon batch-icon-locked" />
              Sair
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default SideBar;
