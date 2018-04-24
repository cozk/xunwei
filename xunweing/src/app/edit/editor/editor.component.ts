import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import {Router} from '@angular/router';
import {GlobalPropertyService} from  './../../services/global-property.service';
import { LocalStorage } from './../../services/localStorage.service';
declare var $:any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers:[UsersService]
})
export class EditorComponent implements OnInit {
  telephone:any;
  constructor(
    private userSer:UsersService,
    private router:Router,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
  ) { }

  ngOnInit() {
  }
  toEdit(edit_form){
    let that=this;
    let user =[];
    if(edit_form.form.value.valueOf().sex == 0)
    {
      user = [edit_form.form.value,{"telephone":that.ls.get('telephone')},{"sex":" "}];
    }
    if(edit_form.form.value.valueOf().sex == 1)
    {
       user = [edit_form.form.value,{"telephone":that.ls.get('telephone')},{"sex":"男"}];
    }
    if(edit_form.form.value.valueOf().sex == 2)
    {
      user = [edit_form.form.value,{"telephone":that.ls.get('telephone')},{"sex":"女"}];
    }
    that.userSer.edit(user,function (result) {//telephone password在value
      if(result.stateCode==1){
        that.glo._hiddenNavs = false;
        that.ls.set('name',user[0].nickname);
        that.router.navigate(['/personal-center']);
      }else {
        $('#modal').attr('data-target','#myModal').click();
        $('#modal_login_body').html('修改失败');
        // alert(result.stateCode);
      }
    })
  }
}
