import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { DeletecategoryComponent } from './deletecategory/deletecategory.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ListeventsComponent } from './listevents/listevents.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { DisplayeventComponent } from './displayevent/displayevent.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    ListcategoriesComponent,
    DeletecategoryComponent,
    DisplaycategoryComponent,
    UpdatecategoryComponent,
    AddeventComponent,
    ListeventsComponent,
    DeleteeventComponent,
    DisplayeventComponent,
    UpdateeventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
