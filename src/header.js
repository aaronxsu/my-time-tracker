import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {'Aaron\'s Time Tracker'}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
