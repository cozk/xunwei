import { Component, OnInit,Input  } from '@angular/core';
import {CookbookService} from "../../services/cookbook.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-jiachang',
  templateUrl: './jiachang.component.html',
  styleUrls: ['./jiachang.component.css'],
  providers:[CookbookService]
})
export class JiachangComponent implements OnInit {
  jiachang=[
    {'jia':'家常菜'},
    {'jia':'私家菜'},
    {'jia':'凉菜'},
    {'jia':'海鲜'},
  ];

  _cooks:1;
  _jia:any;

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
  jia(a){
    let that=this;
    that.fs.getDetailjia(a,function (jia) {
      that._cooks=jia;
      console.log(8888);
    })

  }



  toCookdetail(biaoti){
    this.router.navigate(['/cook-detail',biaoti]);
  }
}
