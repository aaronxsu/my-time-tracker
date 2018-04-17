import React from 'react';

import Grid from 'material-ui/Grid';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

class Sidebar extends React.Component {
  render() {
    return(
      <Grid item xs={2}>
        <List component="nav">
          <ListItem button>
            <Typography variant="button" align="center">
              Timer
            </Typography>
          </ListItem>
          <Divider light />
        </List>
      </Grid>
    )
  }
}

export default Sidebar;
