import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../services/localStorage.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-uprecipes',
  templateUrl: './uprecipes.component.html',
  styleUrls: ['./uprecipes.component.css']
})
export class UprecipesComponent implements OnInit {

  buz=[''];
  mo:boolean=false;
  le:boolean=false;
  constructor(private ls: LocalStorage,
              private router:Router,) { }

  ngOnInit(){

  }
  ngAfterContentChecked(){
    let that=this;
    $('#upload_file0').change(function (e) {
      var file = e.target.files[0];
      that.preview0(file);
    })
    $('#upload_file1').change(function (e) {
      var file = e.target.files[0];
      that.preview1(file);
    })
    $('#upload_file2').change(function (e) {
      var file = e.target.files[0];
      that.preview2(file);
    })
    $('#upload_file3').change(function (e) {
      var file = e.target.files[0];
      that.preview3(file);
    })
    $('#upload_file4').change(function (e) {
      var file = e.target.files[0];
      that.preview4(file);
    })
    $('#upload_file5').change(function (e) {
      var file = e.target.files[0];
      that.preview5(file);
    })
    $('#upload_file6').change(function (e) {
      var file = e.target.files[0];
      that.preview6(file);
    })
  }
  preview0(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview0').empty().append($img);
    }
  }
  preview1(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': 'cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview1').empty().append($img);
    }
  }
  preview2(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview2').empty().append($img);
    }
  }
  preview3(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview3').empty().append($img);
    }
  }
  preview4(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview4').empty().append($img);
    }
  }
  preview5(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview5').empty().append($img);
    }
  }
  preview6(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview6').empty().append($img);
    }
  }
  upload() {
    let that =this;
    var formdata = new FormData($('#upload_form')[0]);
    formdata.append("caixi", that.ls.get('caixi'));
    formdata.append("telephone", that.ls.get('telephone'));
    formdata.append("author", that.ls.get('name'));
    formdata.append("biaoti",that.ls.get('biaoti'));
    formdata.append("gushi",that.ls.get('gushi'));
    formdata.append("buzoua",that.ls.get('buzoua'));
    formdata.append("buzoub",that.ls.get('buzoub'));
    formdata.append("buzouc",that.ls.get('buzouc'));
    formdata.append("buzoud",that.ls.get('buzoud'));
    formdata.append("buzoue",that.ls.get('buzoue'));
    formdata.append("buzouf",that.ls.get('buzouf'));
    $.ajax({
      type: 'post',
      // url: 'http://101.132.140.182:3000/personal/uploadc',
      url:'http://127.0.0.1:3000/personal/uploadc',
      data: formdata,
      async: false,
      cache: false,
      contentType: false,
      processData: false,
      success: function (result) {
        if (result.stateCode == 'e005') {
          alert('没有上传图片');
        } else if (result.stateCode == 'e004') {
          alert('e004');
        } else if (result.stateCode == 0) {
          alert('fail');
        } else if (result.stateCode == 1) {
          that.router.navigate(['/personal-center']);
        }
      },
      error: function (err) {
        alert('error');
      }
    })
  }
  touprecipes(uprecipes_form) {
    let that = this;
    if($("#caixi").val()==null && $("#title").val()==null && $("#gushi").val()==null && $("#buzou1").val()==null && $("#buzou2").val()==null && $("#buzou3").val()==null && $("#buzou4").val()==null && $("#buzou5").val()==null && $("#buzou6").val()==null)
    {
      alert('请填写完整步骤');
      return;
    }
    else{
      if($("#caixi").val()==0)
      {
        that.ls.set('caixi','家常');
      }
      if($("#caixi").val()==1)
      {
        that.ls.set('caixi','中华');
      }
      if($("#caixi").val()==2)
      {
        that.ls.set('caixi','外国');
      }
      if($("#caixi").val()==3)
      {
        that.ls.set('caixi','烘焙');
      }
      that.ls.set('biaoti',$("#title").val());
      that.ls.set('gushi',$("#gushi").val());
      that.ls.set('buzoua',$("#buzou1").val());
      that.ls.set('buzoub',$("#buzou2").val());
      that.ls.set('buzouc',$("#buzou3").val());
      that.ls.set('buzoud',$("#buzou4").val());
      that.ls.set('buzoue',$("#buzou5").val());
      that.ls.set('buzouf',$("#buzou6").val());
      that.upload();
    }

  }
  toadd(){
    $(".del").removeAttr("disabled");
    this.le=false;
    if(this.buz.length<6){
      this.mo=false;
      this.buz.push(' ');
      $(".add").removeAttr("disabled");
    }
    else{
      this.mo=true;
      $(".add").attr({"disabled":"disabled"});
    }
    $(".add").parent().pre().children
  }
  todel(){
    if(this.buz.length==1){
      this.le=true;
      this.mo=false;
      $(".del").attr({"disabled":"disabled"});
    }else{
      this.le=false;
      this.mo=false;
      this.buz.shift();
      $(".del").removeAttr("disabled");
      $(".add").removeAttr("disabled");
    }
  }
}
