import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonalCenterService} from './../../services/personal-center.service'
import { LocalStorage } from './../../services/localStorage.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  providers:[PersonalCenterService]
})
export class WorksComponent implements OnInit {
  _works:any;
  page:any;
  constructor(
    private router:Router,
    private perSer:PersonalCenterService,
    private ls: LocalStorage,
  ) { }

  ngOnInit() {
    let that = this;
    let user = {"telephone":that.ls.get('telephone')}
    that.perSer.work(user,function (result) {
      if(result.stateCode == 0){
        alert('afail');
      }else if(result.stateCode == 'e004'){
        alert('e004');
      }else {
        if(result[0].biaoti == null){
          that._works=null;
          that.page=false;
        }
        else{
          that._works=result;
          that.page=true;
          that.ls.set('cookimg',result.imgcook);
        }
      }
    })
  }
  touprecipes()
  {
    this.router.navigate(['./uprecipes']);
  }
  forumdetailcai(titlecai){
    this.router.navigate(['/forum-detailcai',titlecai]);

  }
}
