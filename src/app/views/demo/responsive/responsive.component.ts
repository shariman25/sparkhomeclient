import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'responsive-demo',
  styles: [`
    @media screen and (max-width: 800px) {
      .desktop-hidden {
        display: initial;
      }
      .mobile-hidden {
        display: none;
      }
    }
    @media screen and (min-width: 800px) {
      .desktop-hidden {
        display: none;
      }
      .mobile-hidden {
        display: initial;
      }
    }
  `],
  templateUrl: 'responsive.component.html',
  encapsulation: ViewEncapsulation.None

})
export class ResponsiveComponent {

  @ViewChild('myTable') table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
