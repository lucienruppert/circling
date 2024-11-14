import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  public email: string = '';

  constructor() { }

  ngOnInit() {
  }

  public subscribe(): void {
    console.log(this.email);
  }

}
