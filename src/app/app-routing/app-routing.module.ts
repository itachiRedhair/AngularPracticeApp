import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './../components/about/about.component';
import { DefaultComponent } from './../components/default/default.component';
import { FormComponent } from './../components/form/form.component';
import { HomeComponent } from './../components/home/home.component';
import { ReactiveFormComponent } from './../components/reactive-form/reactive-form.component';
import { ServersComponent } from './../components/servers/servers.component';
import { UserListComponent } from './../components/user-list/user-list.component';
import { UserDetailsComponent } from './../components/user-details/user-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: UserListComponent, children: [
    { path: '', component: DefaultComponent },
    { path: ':userId', component: UserDetailsComponent }
  ] },
  { path: 'forms', component: FormComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
