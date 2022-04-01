import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { FormComponent } from './components/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
