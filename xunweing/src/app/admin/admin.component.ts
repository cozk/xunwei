import {Component, OnInit} from '@angular/core';
import {AdminService} from './../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  _menu: any;
  _usermenu: any;
  _post: any;
  tabs = ['菜谱管理', '帖子管理'];
  tab_index = 0;

  constructor(private ad: AdminService,
              private router: Router) {
  }

  ngOnInit() {
    let that = this;
    that.ad.getAllCookbook(function (result) {
      console.log(result);
      that._menu = result;
      // console.log(this._menu);
    });
    that.ad.getAllUserCookbook(function (result) {
      that._usermenu = result;
      // console.log(this._menu);
    });
    that.ad.getAllPost(function (result) {
      that._post = result;
    });

  }

  forumdetail(title) {
    this.router.navigate(['/forum-detail', title]);

  }
  forumdetailcai(title) {
    this.router.navigate(['/forum-detailcai', title]);

  }

  toCookdetail(biaoti) {
    this.router.navigate(['/cook-detail', biaoti]);
  }

  delmenu(menuId) {
    if (confirm('是否确定删除该菜谱信息？')) {
      let that = this;
      that.ad.deleteMenu(menuId, function (result) {
        console.log(result);
        if (result.stageCode == 1) {
          that.ad.getAllCookbook(function (result) {
            that._menu = result;
            // console.log(this._menu);
          });
        }
        // location.reload();
      });

    }
  }

  delusermenu(menuId) {
    if (confirm('是否确定删除该菜谱信息？')) {
      let that = this;
      that.ad.deleteUserMenu(menuId, function (result) {
        console.log(result);
        if (result.stageCode == 1) {
          that.ad.getAllUserCookbook(function (result) {
            that._usermenu = result;
            // console.log(this._menu);
          });
        }
        // location.reload();
      });

    }
  }

  delpost(postTitle) {
    if (confirm('是否确定删除该话题信息？')) {
      let that = this;
      that.ad.deletePost(postTitle, function (result) {
        console.log(result);
        if (result.stageCode == 1) {
          that.ad.getAllPost(function (result) {
            that._post = result;
          });
        }
        // location.reload();
      });
    }
  }
}
