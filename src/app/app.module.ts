import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { TimerComponent } from './header/timer/timer.component';
import { HeaderButtonComponent } from './components/header-button/header-button.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { DoneComponent } from './pages/done/done.component';
import { RequestsComponent } from './pages/requests/requests.component';

import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'to-do', component: ToDoComponent },
  { path: 'done', component: DoneComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputComponent,
    HeaderComponent,
    NavbarComponent,
    TimerComponent,
    HeaderButtonComponent,
    HomeComponent,
    CreateTaskComponent,
    ToDoComponent,
    DoneComponent,
    RequestsComponent,
    ButtonComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forRoot({}, {}),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
