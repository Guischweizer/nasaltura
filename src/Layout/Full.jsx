import React, { Component } from 'react';
import API_Requisition from '../API_Requisition/Asteroids_API';

class Full extends Component {
  componentDidMount(){
    API_Requisition();
  }
  render() {
    return (
    <div>
       <section id="sideMenu">
  <nav>
    <a href="*" className="active"><i className="fa fa-home" aria-hidden="true"></i>
 Home</a>
    <a href="*"><i className="fa fa-sticky-note-o" aria-hidden="true"></i> What's New</a>
    <a href="*"><i className="fa fa-bookmark-o" aria-hidden="true"></i> Get Started</a>
    <a href="*"><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Accessiblity</a>
    <a href="*"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Community</a>
    <a href="*"><i className="fa fa-cog" aria-hidden="true"></i> License</a>
  </nav>
</section>

<header>
  <div className="search-area">
    <i className="fa fa-search" aria-hidden="true"></i>
    <input type="text"/>
  </div>
  <div className="user-area">
    <a href="*">+ Add</a>
    <a href="*" className="notification"><i className="fa fa-bell-o" aria-hidden="true"></i>
 <span className="circle">3</span></a>
    <a href="*">
      <div className="user-img"></div>
      <i className="fa fa-caret-down" aria-hidden="true"></i>
    </a>
  </div>
</header>
</div>
    );
  }
}

export default Full;