import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonalCenterService} from './../../services/personal-center.service'
import { LocalStorage } from './../../services/localStorage.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers:[PersonalCenterService]
})
export class CommentComponent implements OnInit {
  _comments : any;
  page:any;
  constructor(
    private router:Router,
    private perSer:PersonalCenterService,
    private ls: LocalStorage,
  ) { }

  ngOnInit() {
    let that = this;
    let user = {"pinglunid":that.ls.get('name')};
    that.perSer.comm(user,function (result) {
      if(result.stateCode == 0){
        alert('afail');
      }else if(result.stateCode == 'e004'){
        alert('e004');
      }else {
        if(result.length == 0){
          that._comments=null;
          that.page=false;
        }
        else{
          that._comments=result;
          that.page=true;
        }

      }
    })
  }

  forumdetail(title){
    this.router.navigate(['/forum-detail',title]);
  }

}
