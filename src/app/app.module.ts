import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel zivi ovde
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { TurnirComponent } from './turnir/turnir.component';
import { TakmicarComponent } from './takmicar/takmicar.component';
import { TrenerComponent } from './trener/trener.component';
import { StatistikaComponent } from './statistika/statistika.component';
import { TimComponent } from './tim/tim.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnirComponent,
    TakmicarComponent,
    TrenerComponent,
    StatistikaComponent,
    TimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

