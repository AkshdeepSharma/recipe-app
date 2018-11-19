import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
  static defaultProps = {

  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <div className="navbar">
        <h2>Recipe App</h2>
        <nav>
          <li><a href="#" onClick={this.props.onNewRecipe}>Add Recipe</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact Us</a></li>
        </nav>
      </div>
    );
  }
}

export default NavBar;
