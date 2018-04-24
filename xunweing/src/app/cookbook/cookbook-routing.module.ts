
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JiachangComponent} from "./jiachang/jiachang.component";
import {ZhonghuaComponent} from "./zhonghua/zhonghua.component";
import {ForeginComponent} from "./foregin/foregin.component";
import {HongpeiComponent} from "./hongpei/hongpei.component";
// import {CookbookListComponent} from "./cookbook-list/cookbook-list.component";
import {CookbookComponent} from "./cookbook.component";
const routes: Routes = [
  {
    path: 'cookbook',
    component: CookbookComponent,
    children: [
      {
        path: 'jiachang',
        component: JiachangComponent
      },
      {
        path: 'zhonghua',
        component: ZhonghuaComponent
      },
      {
        path: 'waiguo',
        component: ForeginComponent
      },
      // {
      //   path: 'cookbook-list/:val',
      //   component: CookbookListComponent
      // },
      {
        path: 'hongpei',
        component: HongpeiComponent
      },
      {
        path: '',
        component: JiachangComponent
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CookbookRoutingModule {}
