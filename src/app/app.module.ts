import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsersService } from './services/users/users.service';
import { UserService } from './services/user/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DefaultComponent } from './components/default/default.component';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { ServersComponent } from './components/servers/servers.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    DefaultComponent,
    AppendorPipe,
    ServersComponent,
    FilterPipe,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
