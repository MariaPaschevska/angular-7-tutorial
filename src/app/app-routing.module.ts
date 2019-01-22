import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroesComponent} from "./heroes/heroes.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {NameEditorComponent} from "./name-editor/name-editor.component";
import {CounterComponent} from "./counter/counter.component";
import {AvatarasComponent} from "./avatars/avataras/avataras.component";
import {AvatarDetailComponent} from "./avatars/avatar-detail/avatar-detail.component";
import {AvatarEditingComponent} from "./avatars/avatar-editing/avatar-editing.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'forms', component: NameEditorComponent},
  { path: 'counter', component: CounterComponent},
  { path: 'avataras', component: AvatarasComponent,
    children: [
      { path: ':id', component: AvatarDetailComponent },
      { path: ':id/edit', component: AvatarEditingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
