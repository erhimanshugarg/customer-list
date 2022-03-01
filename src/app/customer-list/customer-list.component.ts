import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers : string[] = [];
  public value: string;

  @ViewChild('name') nameInput;

  ngOnInit() {
  }

  public onAddCustomer(): void {
    console.log('value', this.value);
    if ( this.value ) {
      this.customers.push(this.value);
      console.log(this.customers);
    }
    this.value = null;
    this.nameInput.nativeElement.value = null;
  }


}
