import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//import {MaterialModule} from '@angular/material'; as the material library is growing no need to import
//all the icons or modules which may make it slow to load
//applied materials starts
import { MatToolbarModule } from '@angular/material'
//applied materials ends


import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { AppComponent } from './app.component';

const MATERIAL_MODULES=[
  MatToolbarModule
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
MATERIAL_MODULES

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
