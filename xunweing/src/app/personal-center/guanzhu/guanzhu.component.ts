import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonalCenterService} from './../../services/personal-center.service'
import { LocalStorage } from './../../services/localStorage.service';
import { AddclService } from './../../services/addcl.service';
@Component({
  selector: 'app-guanzhu',
  templateUrl: './guanzhu.component.html',
  styleUrls: ['./guanzhu.component.css'],
providers:[PersonalCenterService,AddclService]
})
export class GuanzhuComponent implements OnInit {
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
    that.ac.getallgz([{"cltelephone":that.ls.get('telephone')}],function (result){
      that._collections=result;
      if(result.length==0)
      {
        that.page=false;
      }
      else{that.page=true;}
    })
  }

}
