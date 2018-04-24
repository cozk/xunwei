import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalPropertyService} from  './../../services/global-property.service';
@Component({
  selector: 'app-cookbooks-search',
  templateUrl: './cookbooks-search.component.html',
  styleUrls: ['./cookbooks-search.component.css'],

})
export class CookbooksSearchComponent implements OnInit {

  constructor(
    private router:Router,
    private glo:GlobalPropertyService
  ) { }
  _stext:string;

  ngOnInit() {
  }

  toList(text){
    // console.log(login_form.form.value.valueOf().password);
    // this.glo._search = search_form.form.value.valueOf().text;
    // this.glo.
    this.router.navigate(["/cookbook-list",text]);
  }

  // search(s){
  //   this._stext=s;
  // }
}
