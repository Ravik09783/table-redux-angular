import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './@ngrx/root-store.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DialogComponent } from './components/add-user/dialog/dialog.component';
// components
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SpinnerComponent,
    ErrorComponent,
    AddUserComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    HttpClientModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
