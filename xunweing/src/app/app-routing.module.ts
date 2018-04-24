
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import  {EditComponent} from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ForumComponent } from './forum/forum.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { ForumDetailComponent } from './forum/forum-detail/forum-detail.component';
import { UprecipesComponent } from './uprecipes/uprecipes.component';

import {CookbookDetailComponent} from "./cookbook/cookbook-detail/cookbook-detail.component";
import { ForumCanzuoComponent } from './forum/forum-canzuo/forum-canzuo.component'

import {HealthComponent} from './health/health.component'
import {HealthDetailComponent} from './health-detail/health-detail.component';
import {CookbookListComponent} from "./cookbook/cookbook-list/cookbook-list.component";
import { AdminComponent } from './admin/admin.component';
import { ForumDetaicaiComponent } from './forum/forum-detaicai/forum-detaicai.component';
const routes: Routes = [
  {
    path: 'headerfooter',
    component: HeaderFooterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'health-detail/:title',
    component: HealthDetailComponent
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'canzuo',
    component: ForumCanzuoComponent,
  },
  {
    path: 'headerfooter',
    component: HeaderFooterComponent
  },
  {
    path: 'cook-detail/:biaoti',
    component: CookbookDetailComponent
  },
  {
    path: 'cookbook-list/:text',
    component: CookbookListComponent
  },
  {
    path: 'cookbook-list',
    component: CookbookListComponent
  },

  {
    path: 'uprecipes',
    component: UprecipesComponent,
  },

  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forum-detail/:title',
    component: ForumDetailComponent
  },
  {
    path: 'forum-detailcai/:titlecai',
    component: ForumDetaicaiComponent
  },

  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
