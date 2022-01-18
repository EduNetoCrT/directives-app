import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
