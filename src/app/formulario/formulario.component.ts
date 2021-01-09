import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
//2.- Importamos la clase creada
import { LoggingService } from '../LoggingService.service';
//Borrados los import Output y EventEmitter debido a la 
//importacion de el servicio personassService
import { PersonasService } from '../personas.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
//3.- Señalamos la clase dentro de los proveedores
  providers: [LoggingService]
})
export class FormularioComponent implements OnInit {
 //variable borrada debido a que ahora es un servicio
 // @Output() personaCreada = new EventEmitter<Persona>();
//nombreInput:string;
//apellidoInput:string;
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
//4.- Definir un constructor con un objeto del tipo de la
//Clase creada

//Se inyecta aca debido a que ahora es un servicio
  constructor(private loggingService:LoggingService,
              private personasService: PersonasService, ) { 
this.personasService.saludar.subscribe(
    (indice: number) => alert("El indice es: " + indice)
  )
               }

  ngOnInit(): void {
  }
   onAgregarPersona(){
  	let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
  	//5.- Ejecutamos el servicio de esta manera
    
//Borrado debido a que ahora se ejecuta mediante un servicio
    ///this.loggingService.enviarMensajeAConsola("Enviamos persona nombre: " + persona1.nombre + "apellido: " + persona1.apellido);
   // this.personaCreada.emit(persona1);

    //Si queremos utilizar los servicios globalmente debemos
    //definirlo dentro de la clase app.module.ts 
    //y de esta manera se va a compartir con todos los componentes de la aplicacion
  
    this.personasService.agregarPersona(persona1);

  }

}
