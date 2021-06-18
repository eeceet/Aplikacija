import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistikaComponent } from './statistika/statistika.component';
import { TakmicarComponent } from './takmicar/takmicar.component';
import { TimComponent } from './tim/tim.component';
import { TrenerComponent } from './trener/trener.component';
import { TurnirComponent } from './turnir/turnir.component';

const routes: Routes = [
{ path: 'turnir', component: TurnirComponent },
{ path: 'takmicar', component: TakmicarComponent },
{ path: 'trener', component: TrenerComponent },
{ path: 'statistika', component: StatistikaComponent },
{ path: 'tim', component: TimComponent }
];

@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
],
declarations: [

]
})

export class AppRoutingModule { }