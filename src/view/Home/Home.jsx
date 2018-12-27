import React, { Component } from "react";
import "./Home.css";
import Footer from "../../layout/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <main className="main-content p-5" role="main">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-headphones batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">59</div>
                  <div className="tile-description">Ouvinte Dia</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-headphones batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">749</div>
                  <div className="tile-description">Ouvinte Semana</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-headphones batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">2666</div>
                  <div className="tile-description">Ouvinte Mês</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-5">
            <div className="card card-tile card-xs bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-clock batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">00:00:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-8 mb-5">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://api.monitchat.com/img/profile_thumbs/profile_pic.png"
                  width="45"
                  height="32.3"
                />
              </div>
              <div className="card-body">
                <p className="cnv">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 mb-5">
            <div className="card card-md">
              <div className="card-header">
                Hashtag
              </div>
              <div className="card-body">
                <p className="hashtag">#natal(22)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
