import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Ng2PaginationModule} from "ng2-pagination"

import { PersonalCenterComponent } from './personal-center.component';

import { CommentComponent } from './comment/comment.component';
import { WorksComponent } from './works/works.component';

//导入路由模块
import {PersonalCenterRoutingModule} from './personal-center-routing.module';
import { PersonjiequPipe } from './../pipes/personjiequ.pipe';
import { CollectionsComponent } from './collections/collections.component';
import { GuanzhuComponent } from './guanzhu/guanzhu.component';
import { FensiComponent } from './fensi/fensi.component';
@NgModule({
  declarations: [
    PersonalCenterComponent,
    CommentComponent,
    WorksComponent,
    PersonjiequPipe,
    CollectionsComponent,
    GuanzhuComponent,
    FensiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
