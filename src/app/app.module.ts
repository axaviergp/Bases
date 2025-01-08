import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeoresModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    // Se usa el nombre de la clase
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    DbzModule,
    HeoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
