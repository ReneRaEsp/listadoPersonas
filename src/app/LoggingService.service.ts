//1.- Primero creamos la clase que ejecutara 
//el servicio en la carpeta app con la extension
// .service.ts

export class LoggingService{
	enviarMensajeAConsola(mensaje:string){
		console.log(mensaje);
	}
}