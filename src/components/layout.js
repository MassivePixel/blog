import React from 'react';
import Header from './nav';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer className="center-content">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://massivepixel.co">Massive Pixel Blog</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
