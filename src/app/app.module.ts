import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { env } from 'src/env';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  declarations: [AppComponent, TodosComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
