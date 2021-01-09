import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';


import { PersonasService } from './personas.service'; 


import { LoggingService } from './LoggingService.service';

//3.-Se importa de nuevo aca en el componente ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
//10.- se implementa y se importa OnInit
export class AppComponent implements OnInit {



  titulo = 'Listado de Personas';

  personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Gomez")];
  
  //DataService 5.-agregar el servicio creado
  //4.-Se declara en un constructor
  constructor(private loggingService: LoggingService,
  			private personasService: PersonasService){}
//11.- agregar metodo OnInit y se inicializa la variable
  ngOnInit():void{

  	this.personas = this.personasService.personas;
  }

/* onPersonaAgregada(persona: Persona){
 // Se ejecuta el servicio 

//se colocó entre comentarios porque ahora se 
//realizara atraves de servicios

 //	this.loggingService.enviarMensajeAConsola("agregamos el arreglo de la nueva persona: " + persona.nombre);
 //  this.personas.push(persona);

 // 6.-ejecutar el servicio DataService
 this.personasService.agregarPersona(persona);
 }

 //7.- Ir a app.module.ts y agregar el servicio 
 //en la seccion de providers para desplegar servicio
 //globalmente 
 */
}