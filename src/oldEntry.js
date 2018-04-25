import React from 'react';

import moment from 'moment';

import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const styles = {
  card: {
    marginTop: '1em',
    marginRight: '2em',
    marginBottom: '1em',
  }
}

class OldEntry extends React.Component {
  constructor(props) {
    super(props);
    this.start = moment(this.props.entry.start, "HH:mm:ss");
    this.end = moment(this.props.entry.end, "HH:mm:ss");
    this.durationObj = this.end.diff(this.start);
    this.duration = this.getWorkTime(this.end.diff(this.start) / 1000 / 60);
  }

  getWorkTime(mins) {
    if(mins > 60 ) {
      let hours = Math.floor(mins/60) ;
      let minutes = Math.round(mins - hours * 60);
      return `${hours} hr ${minutes} min`
    }
    return `${Math.round(mins)} min`;
  }

  render() {
    return(
      <div>
        <Card style={styles.card}>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={3}>
                {this.props.entry.task}
              </Grid>
              <Grid item xs={3}>
                {this.props.entry.tag}
              </Grid>
              <Grid item xs={3}>
                {
                  [
                    this.start.format("HH:mm A"),
                    this.end.format("HH:mm A")
                  ].join(' - ')
                }
              </Grid>
              <Grid item xs={2}>
                {this.duration}
              </Grid>
              <Grid item xs={1}>
                Delete icon
              </Grid>
            </Grid>
          </ CardContent>
        </Card>
      </div>
    )
  }
}

export default OldEntry;
