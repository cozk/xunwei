import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Ng2PaginationModule} from "ng2-pagination"


import { AppComponent } from './app.component';
import { UprecipesComponent } from './uprecipes/uprecipes.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import {IndexRotationComponent} from './index/index-rotation/index-rotation.component';
import { RegisterComponent } from './register/register.component';
import { ForumComponent } from './forum/forum.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import {HeaderComponent} from './header-footer/header/header.component';

import { ForumSearchComponent } from './forum/forum-search/forum-search.component';
import { ForumBodyComponent } from './forum/forum-body/forum-body.component';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import {CookbookDetailComponent} from "./cookbook/cookbook-detail/cookbook-detail.component";
import {CookbookListComponent} from "./cookbook/cookbook-list/cookbook-list.component"

import { HealthDetailComponent } from './health-detail/health-detail.component';
//导入主路由模块
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


//导入子模块
import {PersonalCenterModule} from './personal-center/personal-center.module';
import {EditModule} from "./edit/edit.module";
import {CookbookModule} from "./cookbook/cookbook.module";


//管道
import { JiequPipe } from './pipes/jiequ.pipe';
import { Queren0Pipe } from './pipes/queren0.pipe';
import { GfjiequPipe } from './pipes/gfjiequ.pipe';
import { Queren1Pipe } from './pipes/queren1.pipe';
import { IndexcookPipe} from './pipes/indexcook.pipe';
import { IndextopicPipe} from './pipes/indextopic.pipe'
import {SearchCooksPipe} from "./pipes/search-cooks.pipe";
import {OrderbyPipe} from "./pipes/orderby.pipe";
import { HealthCommonPipe } from './pipes/health-common.pipe';
import { HealthTabooPipe } from './pipes/health-taboo.pipe';
import { HealthSafetyPipe } from './pipes/health-safety.pipe';
import { HealthStoryPipe } from './pipes/health-story.pipe';
import { HealthTeaPipe } from './pipes/health-tea.pipe';
import { AdminComponent } from './admin/admin.component';

//导入服务
//import {ForumService} from './services/forum.service';
import {GlobalPropertyService} from  './services/global-property.service';
import{LocalStorage} from './services/localStorage.service';
import { HuifuPipe } from './pipes/huifu.pipe';
import { ForumCanzuoComponent } from './forum/forum-canzuo/forum-canzuo.component';


import { Queren3Pipe } from './pipes/queren3.pipe';

import { HealthComponent } from './health/health.component'

//地图
import {NgxAmapModule} from 'ngx-amap';
import { IndexhotmenuPipe } from './pipes/indexhotmenu.pipe';
import { ForumDetaicaiComponent } from './forum/forum-detaicai/forum-detaicai.component';
import { ForumHuifuComponent } from './forum/forum-huifu/forum-huifu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CookbookDetailComponent,
    LoginComponent,
    IndexComponent,
    RegisterComponent,
    ForumComponent,
    IndexRotationComponent,
    HeaderFooterComponent,
    FooterComponent,
    HeaderComponent,
    ForumSearchComponent,
    ForumBodyComponent,
    ForumDetailComponent,
    UprecipesComponent,
    JiequPipe,
    Queren0Pipe,
    GfjiequPipe,
    Queren1Pipe,
    HuifuPipe,
    IndextopicPipe,
    IndexcookPipe,
    SearchCooksPipe,
    CookbookListComponent,
    OrderbyPipe,
    ForumCanzuoComponent,
    Queren3Pipe,
    HealthComponent,
    HealthDetailComponent,
    HealthCommonPipe,
    HealthTabooPipe,
    HealthSafetyPipe,
    HealthStoryPipe,
    HealthTeaPipe,
    IndexhotmenuPipe,
    ForumDetaicaiComponent,
    ForumHuifuComponent,
  ],
  imports: [
    NgxAmapModule.forRoot({
      apiKey: '63cfa7f9eda3285f5edebd75c02cd424'
    }),
    BrowserModule,
    FormsModule,
    Ng2PaginationModule,
    HttpClientModule,
    CookbookModule,//cookbook子路由
    EditModule,//子路由
    PersonalCenterModule,//子路由
    AppRoutingModule//根路由
  ],
  providers: [GlobalPropertyService,LocalStorage,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
