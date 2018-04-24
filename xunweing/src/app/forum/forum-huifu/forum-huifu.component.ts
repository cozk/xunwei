import { Component, OnInit ,Input} from '@angular/core';
import {ForumService} from './../../services/forum.service';
import { LocalStorage } from './../../services/localStorage.service';
@Component({
  selector: 'app-forum-huifu',
  templateUrl: './forum-huifu.component.html',
  styleUrls: ['./forum-huifu.component.css'],
  providers: [ForumService]
})
export class ForumHuifuComponent implements OnInit {
_huifu:any
  @Input() data:any;
  constructor(
    private fs:ForumService,
    private ls: LocalStorage
  ) { }

  ngOnInit() {
    let that = this;
    let hfplid=[{"hfplid":that.data}];
    that.fs.gethf(hfplid,function (huifu) {
      that._huifu=huifu;
    })

  }

}
