import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

//3.-Se importa de nuevo aca en el componente ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Gomez")];
  
  //Se declara en un constructor
  constructor(private loggingService: LoggingService){}

 onPersonaAgregada(persona: Persona){
 	this.loggingService.enviarMensajeAConsola("agregamos el arreglo de la nueva persona: " + persona.nombre);
   this.personas.push(persona);
 }
}
