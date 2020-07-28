import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './componentes/cliente/list/list.component';
import { EditComponent } from './componentes/cliente/edit/edit.component';
import { HomeComponent } from './componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
  ListComponent,
  EditComponent,
  HomeComponent
  
],
   imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
})

export class AppModule { }
