import React from 'react';
import Grid from 'material-ui/Grid';
import Header from './header.js'
import Sidebar from './sidebar.js'
import Content from './content.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container spacing={8}>
          <Sidebar />
          <Content />
        </Grid>
      </div>
    );
  }
}

export default App;
