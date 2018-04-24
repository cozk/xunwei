import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import {ForumService} from './../../services/forum.service';
declare var $:any;
@Component({
  selector: 'app-forum-body',
  templateUrl: './forum-body.component.html',
  styleUrls: ['./forum-body.component.css'],
  providers: [ForumService]
})
export class ForumBodyComponent implements OnInit {

  _forumbody:any;

  @Input() jiequText:string='';
  constructor(
    private router:Router,
    private fs: ForumService
  ) { }

  ngOnInit() {
    $(".pic ul li").mouseover(function(){
      $(this).stop().animate({width: "81%"},1000).siblings().stop().animate({width: "66px"},1000);
    });


    let that=this;
    that.fs.getAllPost(function (result) {
        that._forumbody=result;
    })
  }

  forumdetail(title){
    this.router.navigate(['/forum-detail',title]);
    let that =this;
    let content=[{"title":title}];
    that.fs.addliulan(content,function (result) {

    })
  }

  tofpost(){
    this.router.navigate(['/forum-post']);
  }

  tofabu(){
    this.router.navigate(['/uprecipes']);
  }
}
