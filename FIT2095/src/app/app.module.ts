import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListEventComponent } from './list-event/list-event.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { DatabaseService } from './database.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
  { path: "stats", component: StatsComponent },
  { path: "add-category", component: AddCategoryComponent },
  { path: "add-event", component: AddEventComponent },
  { path: "list-category", component: ListCategoryComponent },
  { path: "list-event", component: ListEventComponent },
  { path: "delete-category", component: DeleteCategoryComponent },
  { path: "", redirectTo: "/stats", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    AddEventComponent,
    DeleteCategoryComponent,
    DeleteEventComponent,
    ListCategoryComponent,
    ListEventComponent,
    UpdateCategoryComponent,
    UpdateEventComponent,
    ViewCategoryComponent,
    ViewEventComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
