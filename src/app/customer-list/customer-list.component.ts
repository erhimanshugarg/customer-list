import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers : string[] = [];
  public value: string = '';


  ngOnInit() {
  }

  public onAddCustomer(): void {
    this.customers.push(this.value);
  }


}