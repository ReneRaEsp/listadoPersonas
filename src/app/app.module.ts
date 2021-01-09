import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Para utilizar un servicio de manera global
//1.- Se declara aqui 
//9.- Se importa aqui el nuevo servicio
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

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
  //8.- Se agrega el servicio PersonasService a providers
  providers: [ LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
