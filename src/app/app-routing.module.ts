import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroesComponent} from "./heroes/heroes.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {NameEditorComponent} from "./name-editor/name-editor.component";
import {CounterComponent} from "./counter/counter.component";
import {AvatarasComponent} from "./avataras/avataras.component";
import {AvatarDetailComponent} from "./avatar-detail/avatar-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'forms', component: NameEditorComponent},
  { path: 'counter', component: CounterComponent},
  { path: 'avataras', component: AvatarasComponent}
  { path: 'avatar-detail/:id', component: AvatarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
