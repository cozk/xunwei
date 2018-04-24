import {BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2PaginationModule} from "ng2-pagination"

import {CookbookComponent} from "./cookbook.component";
import {JiachangComponent} from "./jiachang/jiachang.component";
import {ZhonghuaComponent} from "./zhonghua/zhonghua.component";
import {ForeginComponent} from "./foregin/foregin.component";
import {HongpeiComponent} from "./hongpei/hongpei.component";


//导入路由模块
import {CookbookRoutingModule} from "./cookbook-routing.module";

//
import { JiachangPipe } from './../pipes/jiachang.pipe';
import { ZhonghuaPipe } from './../pipes/zhonghua.pipe';
import { WaiguoPipe } from './../pipes/waiguo.pipe';
import { HongpeiPipe } from './../pipes/hongpei.pipe';
import {CookbooksSearchComponent} from "./cookbooks-search/cookbooks-search.component";
@NgModule({
  declarations:[
    CookbookComponent,
    JiachangComponent,
    ZhonghuaComponent,
    ForeginComponent,
    HongpeiComponent,
    CookbooksSearchComponent,
    JiachangPipe,
    ZhonghuaPipe,
    WaiguoPipe,
    HongpeiPipe,
  ],
  imports:[
    Ng2PaginationModule,
    BrowserModule,
    FormsModule,
    CookbookRoutingModule
  ],
  providers: [],
  bootstrap:[CookbookComponent]
})

export class CookbookModule {}
