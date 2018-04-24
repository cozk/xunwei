import { Component, OnInit,Input  } from '@angular/core';
// import {cooks} from "../datas/data";
import {CookbookService} from "../services/cookbook.service"
@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css'],
  providers:[CookbookService]
})
export class CookbookComponent implements OnInit {
  _cooks:any;
  // @Input() searchText:string='';
  info: Array<Object>; //对象数组
  tabs=['家常菜谱','中华菜谱','外国菜谱','烘培'];
  jiachang=[
    {'jia':'家常菜'},
    {'jia':'私家菜'},
    {'jia':'凉菜'},
    {'jia':'海鲜'},
    {'jia':'热菜'},
    {'jia':'汤粥'},
    {'jia':'素食'},
  ];
  china=[
    {'zhong':'川菜'},
    {'zhong':'湘菜'},
    {'zhong':'粤菜'},
    {'zhong':'东北菜'},
    {'zhong':'鲁菜'},
    {'zhong':'浙菜'},
    {'zhong':'苏菜'},
    {'zhong':'清真菜'},
    {'zhong':'闽菜'},
    {'zhong':'沪菜'},
  ];
  foregin=[
    {'abroad':'韩国料理'},
    {'abroad':'日本料理'},
    {'abroad':'法国菜'},
    {'abroad':'意大利菜'},
    {'abroad':'西餐面点'},
  ];
  hongpei=[
    {'hong':'蛋糕面包'},
    {'hong':'饼干配方'},
    {'hong':'甜品点心'},
  ];



  // i:any;
  constructor(
    private fs: CookbookService
  ) {
  }

  ngOnInit() {
    // this._cooks=cooks.data;
    let that=this;
    that.fs.getAllCookbook(function (result) {
      that._cooks=result;
    });
  }

}
