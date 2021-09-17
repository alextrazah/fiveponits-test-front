import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-container">
      {auth.isAuthenticated && (
        <li>
          <Link className="navbar-brand" to="/">
            Test Platforme de vote
          </Link>
        </li>
        )}
        {!auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            </li>
          </Fragment>
        )}
        {auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link  color="green" className="navbar-item" to="/poll/new">
              <Button>Ajouter un nouveau vote</Button>
              </Link>
            </li>
            <li>
              <a className="navbar-item" onClick={logout}>
                Logout
              </a>
            </li>
          </Fragment>
        )}
      </ul>
      {auth.isAuthenticated && (
        <p className="navbar-user">Logged in as {auth.user.username}</p>
      )}
    </div>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);
