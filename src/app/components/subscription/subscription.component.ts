import { SubscriptionService } from './../../services/Subscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  public email: string = '';

  constructor(private subscription: SubscriptionService) { }

  ngOnInit() {
  }

  public subscribe(): void {
    console.log(this.email);
  }

}
