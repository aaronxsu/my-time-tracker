import React from 'react';
import Grid from 'material-ui/Grid';

import moment from 'moment';

import {chain, map, cloneDeep} from 'lodash';

import DayCard from './dayCard.js';

import records from './records.json'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.today = [
      'Today',
      moment().format('MM/DD/YYYY'),
      moment().format('dddd')
    ].join(', ');
    this.records = this.sortRecords(records);
    this.state = {
      records: this.records
    }
  }

  sortRecords(records) {
    let recordsCopy = chain(records)
      .cloneDeep(records)
      .sortBy((r) => {
        return moment(r.data, 'MM/DD/YYYY').unix();
      })
      .value();

    recordsCopy = chain(recordsCopy).map((r) => {
      return {
        id: r.id,
        date: r.date,
        entries:chain(r.entries).sortBy((ent) => {
          return moment(ent.start, 'HH:mm:ss').unix()
        }).value()
      };
    }).value();
    return recordsCopy;
  }

  getCurrentState() {
    return this.state;
  }

  addEntry(dateId, entry) {
    let state = cloneDeep(this.getCurrentState());
    console.log(state);
    // this.setState({
    //   records: this.sortRecords(state.records.map((date) => {
    //     if(date.id === dateId) {
    //       date.entries.push(entry);
    //     }
    //     return date;
    //   }))
    // });
    console.log(dateId, entry);
    console.log(this.state);
  }

  render() {
    return(
      <Grid item xs={10}>
        {map(this.state.records, entries => {
          return <DayCard
            key={entries.id}
            entries={entries}
            dateId={entries.id}
            onAddEntry={this.addEntry}/>
        })}
      </Grid>
    )
  }
}

export default Content;
