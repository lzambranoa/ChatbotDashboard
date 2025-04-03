import { Injectable } from '@angular/core';
import { PreguntaConfigurada } from '../interfaces/chat-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigChatService {

private configuraciones: PreguntaConfigurada[] = [
  {
    id: 1,
    clienteId: 'cliente-demo',
    pregunta: 'hola',
    respuestas: [{texto: 'Hola! En que puedo ayudarte?', tipo: 'texto'}]
  },
];

  constructor() { }

  obtenerConfiguracion(clienteId: string): PreguntaConfigurada[] {
    return this.configuraciones.filter(p => p.clienteId === clienteId);
  }

  agregarPregunta(config: PreguntaConfigurada) {
    this.configuraciones.push(config);
  }

  actualizarPregunta(id: number, nuevaConfig: PreguntaConfigurada) {
    const index = this.configuraciones.findIndex(p => p.id === id);
    if (index !== -1) this.configuraciones[index] = nuevaConfig;
  }

  eliminarPregunta(id: number) {
    this.configuraciones = this.configuraciones.filter(p => p.id !== id);
  }
}
