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
    if ( this.value ) {
      this.customers.push(this.value);
    }
    this.value = null;
    this.nameInput.nativeElement.value = null;
  }


}
