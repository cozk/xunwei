import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ForumService} from './../../services/forum.service';
@Component({
  selector: 'app-forum-canzuo',
  templateUrl: './forum-canzuo.component.html',
  styleUrls: ['./forum-canzuo.component.css'],
  providers: [ForumService]
})
export class ForumCanzuoComponent implements OnInit {
  _forumbody:any;
  _forumcai:any;
  constructor(
    private router:Router,
    private fs: ForumService
  ) { }

  ngOnInit() {
    let that=this;
    that.fs.getAllPost(function (result) {
      that._forumbody=result;
    })
    that.fs.getAllCai(function (result) {
      that._forumcai=result;
    })
  }


  forumdetail(title){
    this.router.navigate(['/forum-detail',title]);
    let content=[{"title":title}];
    this.fs.addliulan(content,function (result) {

    })
  }
  forumdetailcai(titlecai){
    this.router.navigate(['/forum-detailcai',titlecai]);
    let content=[{"title":titlecai}];
    this.fs.addcailiulan(content,function (result) {

    })
  }
}
