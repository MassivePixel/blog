import React from 'react';
import Link from 'gatsby-link';

// import logo from './logo-blog.svg';

require('prismjs/themes/prism-tomorrow.css');
require('./layout.css');

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Template;
