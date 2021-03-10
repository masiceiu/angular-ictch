import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from "rxjs";

export class ResultData {
  name: string;
}

@Injectable()
export class SubscriptionService {
  private outputSubject: BehaviorSubject<ResultData> = new BehaviorSubject(null); 

  output : Observable<ResultData> = this.outputSubject.asObservable();

  send(data: ResultData){
    this.outputSubject.next(data);
  }

}