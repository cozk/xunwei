import { Component, OnInit } from '@angular/core';
import {UsersService} from './../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from  './../services/global-property.service';
import { LocalStorage } from './../services/localStorage.service';

declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UsersService]
})
export class RegisterComponent implements OnInit {
  _notel: any;
  _code: any;
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

  // getCode(register_form){
  //   let that = this;
  //   that._notel = '';
  //   var re = /^1[3|7|5|8]\d{9}$/;
  //   if(re.test($('#telephone').val())) {
  //     if ($('#telephone').val()) {
  //       that.userSer.sendMessage(register_form.form.value, function (result) {
  //         if (result.messageCode == '2') {
  //           that._notel = "该用户已存在，您可直接登录！";
  //         } else {
  //           that._notel = '已触发';
  //           that._code = result.messageCode;
  //           // that.ls.set("code",result.messageCode);
  //           $("#code1").attr("disabled", "disabled");
  //           $("#code1").css("background-color", "#b4b2b3");
  //           //倒计时
  //           var d = new Date();
  //           d.setSeconds(d.getSeconds() + 59);
  //           var m = d.getMonth() + 1;
  //           var time = d.getFullYear() + '-' + m + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  //           var id = "#code1";
  //           var end_time = new Date(Date.parse(time.replace(/-/g, "/"))).getTime();
  //           var sys_second = (end_time - new Date().getTime()) / 1000;
  //           var timer = setInterval(function () {
  //             if (sys_second > 1) {
  //               sys_second -= 1;
  //               var day, hour, minute, second;
  //               day = Math.floor((sys_second / 3600) / 24);
  //               hour = Math.floor((sys_second / 3600) % 24);
  //               minute = Math.floor((sys_second / 60) % 60);
  //               second = Math.floor(sys_second % 60);
  //               var time_text = '';
  //               if (day > 0) {
  //                 time_text += day + '天';
  //               }
  //               if (hour > 0) {
  //                 if (hour < 10) {
  //                   hour = '0' + hour;
  //                 }
  //                 time_text += hour + '小时';
  //               }
  //               if (minute > 0) {
  //                 if (minute < 10) {
  //                   minute = '0' + minute;
  //                 }
  //                 time_text += minute + '分';
  //               }
  //               if (second > 0) {
  //                 if (second < 10) {
  //                   second = +second;
  //                 }
  //                 time_text += second + '秒';
  //               }
  //               $(id).text(time_text);
  //             }
  //             else {
  //               clearInterval(timer);
  //               $("#code1").attr("disabled", false);
  //               $("#code1").text('获取验证码');
  //               $("#code1").css("background-color", "#f67a62");
  //             }
  //           }, 1000);
  //         }
  //       });
  //     }
  //     else {
  //       that._notel = '请先输入手机号码';
  //     }
  //   }
  //   else {
  //     that._notel = '请输入正确号码';
  //   }
  // }
  toRegister(register_form) {
    let that = this;
    let user = [];
    if (that._code == $('#idCode').val()) {
      that.ls.set('icon','0.jpg');
      user = [register_form.form.value,{"icon":'0.jpg'}];
      that.userSer.register(user, function (result) {//telephone password在value
        if (result.stateCode == 1) {
          that.glo._hiddenNavs = false;
          that.ls.set('datetime',result.datetime);
          that.ls.set('token',result.token);//存储token
          that.ls.set('name', register_form.form.value.valueOf().nickname);
          that.ls.set('telephone',register_form.form.value.valueOf().telephone);
          that.ls.set('icon','0.jpg');
          that.router.navigate(['/index']);
        } else if (result.stateCode == 0) {
          alert('该用户已存在');
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        } else {
          alert('e004');
        }
      });
    } else {
      that._notel = '验证码错误';
    }
  }
}
