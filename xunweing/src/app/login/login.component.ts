import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from  './../services/global-property.service';
import { LocalStorage } from './../services/localStorage.service';
declare var $ :any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {
  login_res:string;
  constructor(
    private userSer:UsersService,
    private router:Router,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
  ) { }

  ngOnInit() {
    this.glo.Navs = false;
  }
  ngOnDestroy() {
    this.glo.Navs = true;
  }
  //单例  单一的实例
  toLogin(login_form){
    let that=this;
    if(login_form.form.value.valueOf().telephone == '13603958295' && login_form.form.value.password == '1234567'){
      that.router.navigate(['/admin']);
    }
    else{
      that.userSer.login(login_form.form.value,function (result) {//telephone password在value
        if(result.stateCode==1){
          that.ls.set('token',result.token);//存储token
          that.ls.set('telephone',login_form.form.value.valueOf().telephone);
          that.ls.set('name',result.name);
          that.ls.set('datetime',result.datetime);
          that.ls.set('icon',result.icon);
          that.ls.set('password',login_form.form.value.password);
          that.ls.set('biaoti',result.biaoti);
          that.ls.set('cookbookimgf',result.cookbookimgf);
          that.ls.set('gushi',result.gushi);
          that.router.navigate(['/index']);
        }else if(result.stateCode==2) {
          $('#pass').html('<i class="glyphicon glyphicon-remove"></i>密码错误');
        }else if(result.stateCode==3){
          $('#tel').html('<i class="glyphicon glyphicon-remove"></i>该手机号不存在，请先注册！');
        }
      })
    }
  }
  clicktel() {
    $('#tel').html('');
  }
  clickpass(){
    $('#pass').html('');
  }

}
