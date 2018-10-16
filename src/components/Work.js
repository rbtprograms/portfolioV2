import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
  state = {
    works: [{
      name: 'Snakes and Squirrels',
      url: 'snakesnsquirrels'
    }]
  };

  render() { 
    const { works } = this.state;

    return (
      works.map(work => (
        <Link key={work.name} to={'/' + work.url}>{work.name}</Link>
      ))
    );
  }
}
 
export default Work;