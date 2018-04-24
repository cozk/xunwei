import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { EditComponent } from './edit.component';
import { EditorComponent } from './editor/editor.component';
import { EditiconComponent } from './editicon/editicon.component';
import { EditpwdComponent } from './editpwd/editpwd.component';

//导入路由模块
import {EditRoutingModule} from './edit-routing.module';


@NgModule({
  declarations: [
    EditComponent,
    EditorComponent,
    EditiconComponent,
    EditpwdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditRoutingModule
  ],
  providers: [],
  bootstrap: [EditComponent]
})
export class EditModule { }
