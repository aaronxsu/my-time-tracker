import React from 'react';
import Grid from 'material-ui/Grid';

import moment from 'moment';

import {chain, map} from 'lodash';

import DayCard from './dayCard.js';

const records = [
  {
    id: '7be1cd0a-39b3-4be9-90ea-88601aaa2f80',
    date: '04/13/2018',
    entries: [
      {
        id: 'de72abe4-0e91-47fc-a61e-bdac60d53a52',
        task: 'PR review',
        tag: 'Raster Foundry Core',
        start: '12:48:36',
        end: '13:30:27'
      },
      {
        id: 'b96dd0d3-bd81-479e-a20d-94c196e441df',
        task: 'PR Update',
        tag: 'Raster Foundry Core',
        start: '10:45:00',
        end: '11:25:59'
      }
    ]
  },
  {
    id: 'bbe9681f-ecea-4601-8aad-8f280c9eb42a',
    date: '04/16/2018',
    entries: [
      {
        id: 'ef636609-5623-4c32-b292-dab9cd1c994b',
        task: 'Update spec',
        tag: 'Raster Foundry Core',
        start: '16:48:46',
        end: '17:10:20'
      },
      {
        id: '7cd904b2-4f69-4a0b-be20-1191d8dece40',
        task: 'Scrum',
        tag: 'Meeting',
        start: '10:30:27',
        end: '10:38:50'
      },
      {
        id: '6cecae57-f51a-450f-9459-e3e64c4ed1b3',
        task: 'Name filter endpoint card',
        tag: 'Raster Foundry Core',
        start: '10:48:46',
        end: '15:10:20'
      }
    ]
  }
]

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.today = [
      'Today',
      moment().format('MM/DD/YYYY'),
      moment().format('dddd')
    ].join(', ');
    this.records = this.sortRecords(records);
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

  render() {
    return(
      <Grid item xs={10}>
        {map(this.records, entries => <DayCard key={entries.id} entries={entries}/>)}
      </Grid>
    )
  }
}

export default Content;
