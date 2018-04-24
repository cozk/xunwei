import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from  './../../services/global-property.service';
import { LocalStorage } from './../../services/localStorage.service';
declare var $ :any;
@Component({
  selector: 'app-editpwd',
  templateUrl: './editpwd.component.html',
  styleUrls: ['./editpwd.component.css'],
  providers:[UsersService]
})
export class EditpwdComponent implements OnInit {
   match:boolean=false;
  _istrue:boolean=false;
  constructor(
    private userSer:UsersService,
    private router:Router,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
  ) { }

  ngOnInit() {
  }
    toEditpass(editpass_form)
    {
      let that = this;
      let pa = that.ls.get('password');
      let user = [editpass_form.form.value.newpassword,{"telephone":that.ls.get('telephone')}];
      if (editpass_form.form.value.oldpassword != editpass_form.form.value.newpassword) {
        if (editpass_form.form.value.oldpassword == pa) {
          that.userSer.editpass(user, function (result) {//telephone password在value
            if (result.stateCode == 1) {
              that.glo._hiddenNavs = false;
              that.ls.set('password',editpass_form.form.value.newpassword);
              that.router.navigate(['/personal-center']);
            } else {
              $('#modal').attr('data-target','#myModal').click();
              $('#modal_login_body').html('提交失败');
            }
          })
        }
        else {
          this._istrue = true;
          $('#modal').attr('data-target','#myModal').click();
          $('#modal_login_body').html('输入正确的密码');
        }
      }
      else {
        this.match = true;
        $('#modal').attr('data-target','#myModal').click();
        $('#modal_login_body').html('新密码不能和旧密码相同');
      }
    }

}
