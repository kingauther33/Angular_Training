import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class CounterService {
  numOfActiveToInactive: number = 0;
  numOfInactiveToActive: number = 0;

  increaseNumOfActiveToInactive() {
    this.numOfActiveToInactive++;
  }

  increaseNumOfInactiveToActive() {
    this.numOfInactiveToActive++;
  }
}
