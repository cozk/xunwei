import { Component, OnInit} from '@angular/core';
import { LocalStorage } from './../../services/localStorage.service';
import {GlobalPropertyService} from  './../../services/global-property.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-editicon',
  templateUrl: './editicon.component.html',
  styleUrls: ['./editicon.component.css']
})
export class EditiconComponent implements OnInit {
             icon: any;

  constructor(private ls: LocalStorage,
              private glo: GlobalPropertyService,
              private router:Router,) {
  }
  ngOnInit() {
    let that = this;
    this.icon = this.ls.get('icon');
    $('#upload_file').change(function (e) {
      var file = e.target.files[0];
      preview(file);
      upload();
    });
    function preview(file) {
      var img = new Image();
      img.src = URL.createObjectURL(file);
      var url = img.src;
      var $img = $(img).css({'width':'100%','height':'100%','object-fit':' cover'});
      img.onload = function () {
        URL.revokeObjectURL(url);
        $('#preview').empty().append($img);
      }
    }
    function upload() {
      var formdata = new FormData($('#upload_form')[0]);
      formdata.append("telephone", that.ls.get('telephone'));
      $.ajax({
        type: 'post',
        url: 'http://127.0.0.1:3000/users/upload',
        data: formdata,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (result) {
          if (result.stateCode == 'e005') {
            $('#modal').attr('data-target','#myModal').click();
            $('#modal_login_body').html('服务错误');
            alert('e005');
          } else if(result.stateCode == 'e004'){
            $('#modal').attr('data-target','#myModal').click();
            $('#modal_login_body').html('数据错误');
            alert('e004');
          }else if (result.icon == '0.jpg') {
            that.ls.set('icon',result.icon);
            // sessionStorage.setItem('icon_new',result.icon);
            $('#modal').attr('data-target','#myModal').click();
            $('#modal_login_body').html('头像重复');
          } else if(result.stateCode == 0){
            $('#modal').attr('data-target','#myModal').click();
            $('#modal_login_body').html('上传失败');
          }else{
            that.ls.set('icon',result.icon);
          }
        },
        error: function (err) {
          $('#modal').attr('data-target','#myModal').click();
          $('#modal_login_body').html('上传失败');
        }
      })
    }
  }
  toupload(){
    let that = this;
    that.glo._hiddenNavs = false;
    that.router.navigate(['./personal-center']);
  }
}


