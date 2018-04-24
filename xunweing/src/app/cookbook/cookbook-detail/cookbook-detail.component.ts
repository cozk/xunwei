import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ForumplService} from './../../services/forumpl.service';
import{Router,ActivatedRoute,ParamMap} from "@angular/router";
import {GlobalPropertyService} from  './../../services/global-property.service';
import {CookbookService} from "../../services/cookbook.service";
import { LocalStorage } from './../../services/localStorage.service';
import { AddplService } from './../../services/addpl.service';
import { AddclService } from './../../services/addcl.service';
declare var $:any;
@Component({
  selector: 'app-cookbook-detail',
  templateUrl: './cookbook-detail.component.html',
  styleUrls: ['./cookbook-detail.component.css'],
  providers:[CookbookService,ForumplService,AddplService,AddclService]
})
export class CookbookDetailComponent implements OnInit {
  _detail:any;
  _pinglun:any;
  _hiddenNavs:any;
  icon:any;
  name:any;

  cookdetail=[
  {'pic':'01.jpg'},
  {'pic':'02.jpg'},
  {'pic':'03.jpg'},
  {'pic':'04.jpg'},
  {'pic':'05.jpg'},
  {'pic':'06.jpg'},
  {'pic':'07.jpg'},
  {'pic':'08.jpg'},
  {'pic':'09.jpg'},
];
  measure=[
    {'num':'1.','edit':'食材：洋葱、牛肉、杭椒','pic':'measure01.jpg'},
    {'num':'2.','edit':'牛肉切大片，加入烤肉酱、黑胡椒碎、料酒、淀粉','pic':'measure02.jpg'},
    {'num':'3.','edit':'抓匀腌渍几分钟（如果觉得太干，可以加些水抓匀，让水吃进牛肉中）','pic':'measure03.jpg'},
    {'num':'4.','edit':'洋葱块，杭椒切段，切些葱姜末备用。','pic':'measure04.jpg'},
    {'num':'5.','edit':'腌渍好的牛肉中加入2茶匙食用油拌匀。','pic':'measure05.jpg'},
    {'num':'6.','edit':'锅中放食用油烧热，放入腌渍好的牛肉滑炒。','pic':'measure06.jpg'},
    {'num':'7.','edit':'炒至变色立刻盛出。','pic':'measure07.jpg'},
    {'num':'8.','edit':'锅中留少许底油，放入葱姜末爆香','pic':'measure08.jpg'},
    {'num':'9.','edit':'爆香葱姜末后，放入杭椒、洋葱快速翻炒均匀。','pic':'measure09.jpg'},
    {'num':'10.','edit':'翻炒均匀后加入滑炒好的牛肉快速翻炒均匀。','pic':'measure10.jpg'},
    {'num':'11.','edit':'加入蚝油，少许老抽翻炒均匀。','pic':'measure11.jpg'},
    {'num':'12.','edit':'翻炒均匀后用水淀粉勾芡。','pic':'measure12.jpg'},
    {'num':'13.','edit':'炒至芡汁明亮裹在食材上即可关火盛出。','pic':'measure13.jpg'},
  ];
  zuopin=[
    {'pic':'zuopin01.jpg'},
    {'pic':'zuopin02.jpg'},
    {'pic':'zuopin03.jpg'},
    {'pic':'zuopin04.jpg'},
  ];
  comlist=[
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
    {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
  ];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cs: CookbookService,
    private fspl:ForumplService,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
    private ac:AddclService

  ) {
    this.comlist=[
      {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'好吃','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'简单','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'简单','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'简单','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'简单','comTime':'2017-09-20 20:56:37'},
      {'touxiang':'tou01.png','userName':'tom','content':'简单','comTime':'2017-09-20 20:56:37'},
    ];
  }
  ngOnInit() {
    window.scrollTo(0,0);
    this.glo.Navs = false;
    let biaoti=this.route.snapshot.paramMap.get('biaoti');
    let that=this;
    that.cs.getDetailCookbook(biaoti,function (detail) {
      that._detail=detail[0];
      if(that.ls.get('token')!=''){
      that.ac.searchCollections([{"ckid":that._detail.ckid},{"cltelephone":that.ls.get('telephone')}],function (result) {
        console.log('AA');
        console.log(result[0]);
        if(result[0].clid>0){
          $('.addToFav_con').html('已收藏');
        }
      })}
    })
    console.log('qq');
  }
  _hot=1;
  hot(){
    this._hot=1;

  }
  newCook(){
    this._hot=2;
  }


  ngOnDestroy() {
    this.glo.Navs = true;
  }
  //============================================================收藏功能
toAddCl(){
    if(this.ls.get('token')==''){
      this.router.navigate(['/login'])
    }else{
      let that=this;
      let content=[{"ckid":that._detail.ckid},{"cltelephone":that.ls.get('telephone')}];
      if($('.addToFav_con').html()=='收藏'){
      that.ac.addcl(content,function (result) {
        if(result!=0){
          $('.addToFav_con').html('已收藏');
          alert('收藏成功！');
          that.ac.addrenqi([{"ckid":that._detail.ckid}],function (result) {
          })
        }
      })}
      else{
        let content=[{"ckid":that._detail.ckid},{"cltelephone":that.ls.get('telephone')}];
        that.ac.deleteCollections(content,function (result) {
          if(result!=0){
            $('.addToFav_con').html('收藏');
            alert('取消收藏成功！');
            that.ac.deleterenqi([{"ckid":that._detail.ckid}],function (result) {
            })
          }
        })
      }
    }
}


}
