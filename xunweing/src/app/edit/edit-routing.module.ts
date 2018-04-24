import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EditComponent } from './edit.component';
import { EditorComponent } from './editor/editor.component';
import { EditiconComponent } from './editicon/editicon.component';
import { EditpwdComponent } from './editpwd/editpwd.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
    children: [
      {
        path: 'editor',
        component: EditorComponent,
      },
      {
        path: 'editicon',
        component: EditiconComponent,
      },
      {
        path: 'editpwd',
        component: EditpwdComponent,
      },
      {
        path: '',
        component: EditorComponent,
      }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
