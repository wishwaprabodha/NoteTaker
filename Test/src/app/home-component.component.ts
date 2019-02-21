import { Component, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styles: []
})

export class HomeComponent implements OnDestroy {
  title = 'Home';
  private subscription: Subscription;

  param: string;

  constructor(private router: ActivatedRoute) {
    this.subscription = router.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
