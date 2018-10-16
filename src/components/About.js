import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {
  render() { 
    return (
      <section className={styles.about}>
        <p>hello I am Robert Thompson.</p>
        <p>I am a software developer and creative designer from Portland, OR.</p>
        <p>I believe design and development evolve hand in hand. Form should not be sacrificed for style, nor vice versa.</p>
        <p>FAQ</p>
        <p>1. Thing one</p>
        <p>2. Thing 2</p>
        <p>3. No, I will not do free work for you. Unless you are a charity, in which case I can do some free work for you.</p>
        <p>Drop by and say hello sometime:</p>
        <p>rbtprograms AT gmail DOT com</p>
      </section>
    );
  }
}
 
export default About;