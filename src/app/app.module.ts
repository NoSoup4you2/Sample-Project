import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';

import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FarmCreateComponent
  ],
  imports: [
  
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule ,
    FormsModule, 
    ReactiveFormsModule,
    ToasterModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
