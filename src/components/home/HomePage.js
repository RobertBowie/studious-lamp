import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.component {
  render() {
    return (
      <div className="jumptron">
        <h1>Studious Lamp</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
    );
  }
}

export default HomePage;
