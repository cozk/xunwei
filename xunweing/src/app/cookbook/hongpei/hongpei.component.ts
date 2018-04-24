import { Component, OnInit,Input } from '@angular/core';
import {CookbookService} from "../../services/cookbook.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-hongpei',
  templateUrl: './hongpei.component.html',
  styleUrls: ['./hongpei.component.css'],
  providers:[CookbookService]
})
export class HongpeiComponent implements OnInit {
  hongpei=[
    {'hong':'蛋糕面包'},
    {'hong':'饼干配方'},
    {'hong':'甜品点心'},
  ];
  _cooks:any;
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
