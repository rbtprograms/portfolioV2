import React, { Component } from 'react';
import styles from './Project.css';

class Snakes extends Component {
  render() { 
    return (
      <section className={styles.project}>
        <h2>Snakes and Squirrels</h2>
        <p>Realtime multiplayer game</p>
        <p className='techs'>Technologies: Firebase, React w/ Redux, Express, MongoDB w/ Mongoose, Node.js, Webpack, SASS</p>
      </section>
    );
  }
}
 
export default Snakes;