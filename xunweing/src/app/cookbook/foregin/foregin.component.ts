import { Component, OnInit ,Input} from '@angular/core';
import {CookbookService} from "../../services/cookbook.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-foregin',
  templateUrl: './foregin.component.html',
  styleUrls: ['./foregin.component.css'],
  providers:[CookbookService]

})
export class ForeginComponent implements OnInit {
  _cooks:any;
  foregin=[
    {'abroad':'韩国料理'},
    {'abroad':'日本料理'},
    {'abroad':'法国菜'},
    {'abroad':'意大利菜'},
    {'abroad':'西餐面点'},
  ];
  constructor(
    private fs: CookbookService,
  private router:Router

  ) { }
  @Input( ) _cook:any;
  ngOnInit() {
    let that=this;
    that.fs.getAllCookbook(function (result) {
      that._cooks=result;
    })
  }
  toCookdetail(biaoti){
    this.router.navigate(['/cook-detail',biaoti]);
  }
  jia(a){
    let that=this;
    that.fs.getDetailjia(a,function (jia) {
      that._cooks=jia;
      console.log(8888);
    })

  }

}
