import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  render() { 
    return (
      <section className={styles.header}>
        <Link to="/work">{'<' + 'work' + '/>'}</Link>
        <Link to="/about">{'<' + 'about' + '/>'}</Link>
      </section>
    );
  }
}
 
export default Header;