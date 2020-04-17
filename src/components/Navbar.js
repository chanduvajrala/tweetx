import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
      <AppBar>
        <Toolbar>
        <div type="title" className='nav-container-logo'>
            <Typography variant="h5">TweetX</Typography>
        </div>
        <div className="nav-container">
          {authenticated ? (
            <Fragment>
                <Button color="inherit" component={Link} to="/home">Feed</Button>
                <Button color="inherit" component={Link} to="/users">Users</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Signup</Button>
              <Button color="inherit" component={Link} to="/home">Home</Button>
            </Fragment>
          )}
          </div>
        </Toolbar>
      </AppBar>
    );
    }
}
Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
