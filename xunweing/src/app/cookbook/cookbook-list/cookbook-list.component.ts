import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookbookService} from "../../services/cookbook.service"
import { ActivatedRoute, ParamMap } from '@angular/router';
import {GlobalPropertyService} from "../../services/global-property.service";

// import {GlobalPropertyService} from  './../services/global-property.service';

@Component({
  selector: 'app-cookbook-list',
  templateUrl: './cookbook-list.component.html',
  styleUrls: ['./cookbook-list.component.css'],
  providers:[CookbookService],


})
export class CookbookListComponent implements OnInit {
  hotSearch=[
    {'hs':'家常菜'},
    {'hs':'苏菜'},
    {'hs':'甜品点心'},
    {'hs':'鱼'},
    {'hs':'牛肉'},
    {'hs':'鸡'},
  ];
  _cooks:any;
  _count:any;
  // search:any;
  constructor(
    private router:Router,
    private fs: CookbookService,
    private route: ActivatedRoute,

    private glo:GlobalPropertyService
  ) { }
  _stext:string;
  _height:boolean=false;
  ngOnInit() {
    var text=this.route.snapshot.paramMap.get('text');


    this._stext=text;

    this._count=this.glo.cooklength;
    let that=this;
    that.fs.getAllCookbook(function (result) {
      that._cooks=result;
    })
  }
  search(text){
    this._stext=text;
    this._count=this.glo.cooklength;

  }
  _existhot:boolean=true;//hot红色
  _existnew:boolean=false;

  _hot=1;
 hot(){
    this._hot=1;
    this._existhot=true;
   return this._existnew=!this._existnew;//

 }
  // _new=1;
  newCook(){
    this._hot=2;
    this._existnew=true;
    return this._existhot=!this._existhot;


  }
  toCookdetail(biaoti){
    this.router.navigate(['/cook-detail',biaoti]);
  }

}
