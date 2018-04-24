import {Component, OnInit} from '@angular/core';
import {GlobalPropertyService} from "../../services/global-property.service";
import {Router} from '@angular/router';
import { LocalStorage } from './../../services/localStorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _hiddenNavs: boolean;
  name:any;
  tologin(){
    this.router.navigate(['/login']);
  }
  toregister(){
    this.router.navigate(['/register']);
  }
  toexit()
  {
    this.router.navigate(['/index']);
    localStorage.clear();
  }
  constructor(
    private glo: GlobalPropertyService,
    private router:Router,
    private ls: LocalStorage,
  ) {
  }
  ngOnInit() {
    if(this.ls.get('token')!=''){
      this._hiddenNavs=false;
      this.name = this.ls.get('name');
    }
    else{
      this._hiddenNavs=true;
    }

  }
  ngAfterContentChecked(){
    if(this.ls.get('token')!=''){
      this._hiddenNavs=false;
      this.name = this.ls.get('name');
    }
    else{
      this._hiddenNavs=true;
    }
  }
  toindex() {
    this.router.navigate(['/index']);
  }
}
