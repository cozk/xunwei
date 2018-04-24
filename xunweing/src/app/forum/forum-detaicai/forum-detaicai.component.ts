import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import {ForumService} from './../../services/forum.service';
import {ForumplService} from './../../services/forumpl.service';
import {GlobalPropertyService} from  './../../services/global-property.service';
import { LocalStorage } from './../../services/localStorage.service';
import { AddplService } from './../../services/addpl.service';
declare var $:any;
@Component({
  selector: 'app-forum-detaicai',
  templateUrl: './forum-detaicai.component.html',
  styleUrls: ['./forum-detaicai.component.css'],
  providers: [ForumService,ForumplService,AddplService]
})
export class ForumDetaicaiComponent implements OnInit {
  _detail:any;
  _detailcai:any;
  _pinglun:any;
  title:any;
  _hiddenNavs:any;
  xian:number=-1;
  icon:any;
  name:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fs:ForumService,
    private fspl:ForumplService,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
    private pa:AddplService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    if(this.ls.get('token')=='')//没有登入
    {
      this._hiddenNavs =  true;
    }
    else {
      this._hiddenNavs = false;
    }



    this.icon = this.ls.get('icon');
    this.name = this.ls.get('name');


    let title=this.route.snapshot.paramMap.get('titlecai');
    let that=this;
    that.fs.getDetailCai(title,function (title) {
      that._detailcai=title[0];

      if(that.ls.get('token')!=''){
        that.fs.searchgz([{"atedtelephone":that._detailcai.telephone},{"attelephone":that.ls.get('telephone')}],function (result) {
          if(result[0].atid>0){
            $('.sp1').html('已关注');
          }
        })}
    })

    that.fspl.getDetailPinglun(title,function (pinglun) {
      that._pinglun=pinglun;
      console.log(that._pinglun);

    })



  }

  addat(telephone){
    if(this.ls.get('token')==''){
      this.router.navigate(['/login'])
    }else{
      let that=this;
      let content=[{"atedtelephone":telephone},{"attelephone":that.ls.get('telephone')}];
      if($('.sp1').html()=='加关注'){
        that.fs.addat(content,function (result) {
          if(result!=0){
            $('.sp1').html('已关注');
            alert('关注成功！');
            that.fs.addguanzhu(content,function (result) {
              that.fs.addfensi(content,function (result) {
              })
            })
          }
        })
      }else{
        that.fs.deleteat(content,function (result) {
          if(result!=0){
            $('.sp1').html('加关注')
            alert('取消关注成功！');
            that.fs.deleteguanzhu(content,function (result) {
              that.fs.deletefensi(content,function (result) {
              })
            })
          }
        })
      }
    }
  }



  topinglun(plcontent){
    let title=this.route.snapshot.paramMap.get('titlecai');
    let that=this;
    let content=[plcontent.form.value,{"id":that.ls.get('name')},{"title":title}];
    console.log(content);
    that.pa.addpl(content,function (result) {
      $('.ta').val(" ");
      that.fspl.getDetailPinglun(title,function (pinglun) {
        that._pinglun=pinglun;})
    })


  }

  tohf(hfcontent,hfedname,hfid){
    let title=this.route.snapshot.paramMap.get('titlecai');
    let that=this;
    let hfcont=[hfcontent.form.value,{"huifuauthor":that.ls.get('name')},{"huifued":hfedname},{"hfplid":hfid}];
    that.fs.addhf(hfcont,function (pinglun) {
      that.fspl.getDetailPinglun(title,function (pinglun) {
        that._pinglun=pinglun;
        that.xian=-1;
      })
    })
  }
  toforumbody(){
    this.router.navigate(["/forum"]);
  }

  xianshi(index){
    if(this.xian!=index){
      this.xian=index;
      $('.huifub').html('收起');
    }else{
      this.xian=-1;
      $('.huifub').html('回复');
    }
  }
}

