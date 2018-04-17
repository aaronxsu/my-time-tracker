import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const styles = {
  card: {
    marginTop: '1em',
    marginRight: '2em',
    marginBottom: '1em',
  }
}

class OldEntry extends Component {
  render() {
    return(
      <div>
        <Card style={styles.card}>
          <CardContent>
          </ CardContent>
        </Card>
      </div>
    )
  }
}

export default OldEntry;
