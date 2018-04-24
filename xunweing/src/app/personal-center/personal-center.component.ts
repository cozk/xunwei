import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {GlobalPropertyService} from  './../services/global-property.service';
import { LocalStorage } from './../services/localStorage.service';
import {PersonalCenterService} from './../services/personal-center.service';


declare var $:any;
@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: [PersonalCenterService]
})
export class PersonalCenterComponent implements OnInit{
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private glo:GlobalPropertyService,
    private ls: LocalStorage,
    private pc:PersonalCenterService,

  ) { }
  toedit(){
    this.router.navigate(['./edit']);
  }

  touprecipes()
  {
    this.router.navigate(['./uprecipes']);
  }

  name:string;
  datetime:any;
  icon:any;
  ngOnInit() {
    if(this.ls.get('token')=='')
    {
      this.router.navigate(['./login']);
    }
    this.name = this.ls.get('name');
    this.datetime = this.ls.get('datetime');
    this.icon = this.ls.get('icon');


    $('.li1').on('mouseover',function(){
       $('.li1').children('a').css('color','#FFF')
    })
    $('.li1').on('mouseout',function(){
      $('.li1').children('a').css('color','grey')
    })
    $('.li2').on('mouseover',function(){
      $('.li2').children('a').css('color','#FFF')
    })
    $('.li2').on('mouseout',function(){
      $('.li2').children('a').css('color','grey')
    })
    $('.li3').on('mouseover',function(){
      $('.li3').children('a').css('color','#FFF')
    })
    $('.li3').on('mouseout',function(){
      $('.li3').children('a').css('color','grey')
    })
    $('.li4').on('mouseover',function(){
      $('.li4').children('a').css('color','#FFF')
    })
    $('.li4').on('mouseout',function(){
      $('.li4').children('a').css('color','grey')
    })
  }

}

