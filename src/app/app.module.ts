import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Para utilizar un servicio de manera global
//1.- Se declara aqui 
import { LoggingService } from './LoggingService.service';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //2.- Se incluye aca && ir al paso tres en app.component.ts
  providers: [ LoggingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
