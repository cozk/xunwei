import { Component, OnInit,Input } from '@angular/core';
import {CookbookService} from "../../services/cookbook.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-zhonghua',
  templateUrl: './zhonghua.component.html',
  styleUrls: ['./zhonghua.component.css'],
  providers:[CookbookService]
})
export class ZhonghuaComponent implements OnInit {
  china=[
    {'zhong':'川菜'},
    {'zhong':'湘菜'},
    {'zhong':'粤菜'},
    {'zhong':'东北菜'},
    {'zhong':'鲁菜'},
    {'zhong':'浙菜'},
    {'zhong':'苏菜'},
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
