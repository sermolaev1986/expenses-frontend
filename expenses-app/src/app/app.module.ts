import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from './form/form.component';
import {ExpensesListComponent} from './expenses-list/expenses-list.component';
import {RouterModule, Routes} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CameraSnapshotModule} from "./camera-snapshot/camera-snapshot.module";
import {CameraSnapshotComponent} from "./camera-snapshot/camera-snapshot/camera-snapshot.component";

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'list', component: ExpensesListComponent},
  {path: 'camera', component: CameraSnapshotComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CameraSnapshotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
