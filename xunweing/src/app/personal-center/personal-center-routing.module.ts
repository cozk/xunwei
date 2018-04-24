import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import {PersonalCenterComponent} from './personal-center.component';
import { CommentComponent } from './comment/comment.component';
import { WorksComponent } from './works/works.component';
import  {EditComponent} from '../edit/edit.component';
import { GuanzhuComponent } from './guanzhu/guanzhu.component';
import { FensiComponent } from './fensi/fensi.component';
const routes: Routes = [
  {
    path: 'personal-center',
    component: PersonalCenterComponent,
    children: [

      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'guanzhu',
        component: GuanzhuComponent,
      },
      {
        path: 'fensi',
        component: FensiComponent,
      },
      {
        path: 'comment',
        component: CommentComponent,
      },
      {
        path: 'collections',
        component: CollectionsComponent,
      },
      {
        path: 'works',
        component: WorksComponent,
      },
      {
        path: '',
        component: WorksComponent,
      }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule {
}
