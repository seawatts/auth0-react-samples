import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.route.auth;
    return (
      <div>
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <Link
                  to={'/login'}
                >
                  Log In
                </Link>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
