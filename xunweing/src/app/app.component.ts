import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalPropertyService} from './services/global-property.service'
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nav:boolean=true;
  constructor(
    private router:Router,
    private glo:GlobalPropertyService
  ) { }

  // tologin(){
  //   this.router.navigate(['/login']);
  // }
  // toregister(){
  //   this.router.navigate(['/register']);
  // }

  ngOnInit(){
    this.nav=this.glo.Navs;
  }


  ngAfterContentChecked(){
    this.nav=this.glo.Navs;
  }
  goTop()
  {
    $(window).scroll(function(e) {
      //若滚动条离顶部大于100元素
      if($(window).scrollTop()>100)
        $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
      else
        $("#gotop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
    });
  };
  backTop(){
    //点击回到顶部的元素
    $("#gotop").click(function(e) {
      //以1秒的间隔返回顶部
      $('body,html').animate({scrollTop:0},1000);
    });
    $("#gotop").mouseover(function(e) {
      $(this).css("background","url(../assets/images/top.png) no-repeat ");
    });
    $("#gotop").mouseout(function(e) {
      $(this).css("background","url(../assets/images/top2.png) no-repeat ");
    });
    this.goTop();//实现回到顶部元素的渐显与渐隐
  };
}
