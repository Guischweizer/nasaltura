import React, { Component } from 'react';
import API_Requisition from '../API_Requisition/Asteroids_API';

class Full extends Component {
  componentDidMount() {
    // API_Requisition();
  }
  render() {
    return (
      <div>
        <section id="sideMenu">
          <nav>
          <a href="*" ><i className="fa fa-cog" aria-hidden="true"></i> EPIC API REQUISITION</a>
  </nav>
</section>

      <header>
        <div className="search-area">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" />
        </div>
      </header>
</div >
    );
  }
}

export default Full;