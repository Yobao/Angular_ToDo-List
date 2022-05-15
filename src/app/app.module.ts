import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { DoneComponent } from './pages/done/done.component';
import { TimerComponent } from './header/timer/timer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderButtonComponent } from './components/header-button/header-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputComponent,
    HeaderComponent,
    NavbarComponent,
    CreateTaskComponent,
    ToDoComponent,
    DoneComponent,
    TimerComponent,
    HomeComponent,
    HeaderButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
