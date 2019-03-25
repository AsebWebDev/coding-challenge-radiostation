import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RadiosComponent }      from './radios/radios.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RadiosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
