import {Persona} from './persona.model';
import {LoggingService} from './LoggingService.service';

import {Injectable} from '@angular/core';


/*Data services en angular*/
//1.- Crea una clase PersonasService en tu app
@Injectable()
export class PersonasService{
/*Data services en angular*/
//2.- Copiamos y pegamos o creamos el arreglo personas 
//de esta manera con esta sintax
personas: Persona[] = [
	new Persona("Juan","Perez"),
	new Persona("Laura","Gomez")
];
//3.- Se copio desde la clase app.component.ts 
//y se colocó entre comentarios porque ahora se 
//realizara atraves de servicios

//4.- ir a la clase app.component donde se ejecutara 
//el servicio creado
 constructor(private loggingService: LoggingService){}

agregarPersona(persona:Persona){
  this.loggingService.enviarMensajeAConsola("agregamos la persona" + persona.nombre);
   this.personas.push(persona);
}

}