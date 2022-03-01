import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers : string[] = [];
  public value: string ='';

  @ViewChild('name') nameInput;

  ngOnInit() {
  }

  public onAddCustomer(value): void {
    
    if ( value ) {
      console.log('value', value);
      this.customers.push(value);
      console.log(this.customers);
    }
   
    this.nameInput.nativeElement.value = null;
  }


}
