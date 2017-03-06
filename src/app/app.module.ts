import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // con este módulo podemos realizar two-way binding - enlaces bidireccionales
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule // declaramos el módulo
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
