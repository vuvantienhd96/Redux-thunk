import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {

  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>{branding}</h2>
    </div>
  );
}


Header.propTypes = {
  branding: PropTypes.string.isRequired,
}
Header.defaultProps = {
  branding: 'Firt app'
}

export default Header;