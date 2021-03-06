import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonalCenterService} from './../../services/personal-center.service'
import { LocalStorage } from './../../services/localStorage.service';
import { AddclService } from './../../services/addcl.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  providers:[PersonalCenterService,AddclService]
})
export class CollectionsComponent implements OnInit {
  _collections : any;
  page:any;
  constructor(
    private router:Router,
    private perSer:PersonalCenterService,
    private ls: LocalStorage,
    private ac:AddclService
  ) { }

  ngOnInit() {
    let that=this;
    that.ac.getallcl([{"cltelephone":that.ls.get('telephone')}],function (result){
      that._collections=result;
      if(result.length==0)
      {
        that.page=false;
      }
      else{that.page=true;}
    })
  }
  toCookdetail(biaoti){
    this.router.navigate(['/cook-detail',biaoti]);
  }
}
