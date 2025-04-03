import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private respuestas: { [key: string]: string } = {
    'hola': '¡Hola! ¿En qué puedo ayudarte?',
    'como estas': 'Estoy bien, gracias por preguntar. 😊',
    'que puedes hacer': 'Puedo responder preguntas básicas. 🚀',
    'adios': '¡Hasta luego! 👋'
  };

  obtenerRespuesta(mensaje: string): string {
    const mensajeLimpio = mensaje.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios
    
    const respuesta = this.respuestas[mensajeLimpio] || 'Lo siento, no entiendo esa pregunta. 🤔';
    
    return respuesta;
  }
}
