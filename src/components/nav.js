import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <nav>
    {/* <img src={logo} width={40} /> */}
    <Link exact to={'/'} activeClassName="active">
      <span className="title">Blog</span>
    </Link>
    <Link to={'/bio'} activeClassName="active">
      <span className="title">About</span>
    </Link>
  </nav>
);

export default Header;
