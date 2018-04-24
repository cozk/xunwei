import {Component, OnInit} from '@angular/core';
import {HealthService} from '../services/health.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
  providers: [HealthService]
})
export class HealthComponent implements OnInit {
  _health: any;

  constructor(private hs: HealthService,
              private router: Router) {
  }

  ngOnInit() {
    $('#myNav').affix({
      offset: {
        top: 526
      }
    });
    let that = this;
    that.hs.getAllHealth(function (result) {
      that._health = result;
      console.log(that._health);
      console.log(11111);
    });
  }

  toHealthDetail(title) {
    this.router.navigate(['/health-detail', title]);
  }

}
