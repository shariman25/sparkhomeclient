import { Component } from '@angular/core';

@Component({
  selector: 'table-demo',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name', name: 'Name'} , 
    { prop: 'vehicle_no', name: 'Vehicle No' }, 
    { prop: 'house_no', name: 'House No' },
    { prop: 'phone_no', name: 'Phone No' },
    { prop: 'time_in', name: 'Time-in' },
    { prop: 'status', name: 'Status'}
  ];

  // columns: any[] = [
  //   { prop: 'name'} , 
  //   { name: 'Gender' }, 
  //   { name: 'Company' },
  //   { name: 'Age' }
  // ];

  constructor() {
    this.fetch((data) => {
      this.selected = [data[2]];
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/activity_management.json`);
    //req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
