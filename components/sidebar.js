import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Sidebar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <div className="col-1 Sidebar">
          <ul>
            <li className="col-m-1"><Link to="/">Maxine Ellah</Link></li>
            <li className="col-m-1"><Link to="/contact">Contact</Link></li>
            <li className="col-m-1"><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sidebar;
