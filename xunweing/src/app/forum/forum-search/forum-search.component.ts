import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  tocanzuo(){
    this.router.navigate(['/canzuo']);

  }
  togc(){
    this.router.navigate(['/forum']);

  }
  tohongbei(){
    this.router.navigate(['/hong']);

  }
  tomeishi(){
    this.router.navigate(['/ketang']);

  }
}
