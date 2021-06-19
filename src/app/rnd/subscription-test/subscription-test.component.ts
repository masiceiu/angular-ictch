import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionService, ResultData } from './../index';;
import { SubscriptionLike as ISubscription } from "rxjs";

@Component({
  selector: 'app-subscription-test',
  templateUrl: './subscription-test.component.html',
  styleUrls: ['./subscription-test.component.css'],
  providers: [SubscriptionService]
})
export class SubscriptionTestComponent implements OnInit, OnDestroy {
name = 'Angular 6';

  sub: ISubscription;

  constructor(private subscriptionService: SubscriptionService) {

  }

  ngOnInit() {
    this.sub = this.subscriptionService.output.subscribe(v => {
      if(v) {
        this.name = v.name;
      }
    })
    /*
    let newData = new ResultData();
    newData.name = "Angular 6 Subscription Test";

    this.subscriptionService.send(newData);
    */
  }
  onSend():void
  {
    let newData = new ResultData();
    newData.name = "Angular 6 Subscription Test" + new Date().toTimeString();

    this.subscriptionService.send(newData);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
}