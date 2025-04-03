import { Component } from '@angular/core';
import { PreguntaConfigurada } from '../../interfaces/chat-config';
import { ConfigChatService } from '../../services/config-chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config-chat',
  imports: [FormsModule],
  templateUrl: './config-chat.component.html',
  styleUrl: './config-chat.component.scss'
})
export class ConfigChatComponent {
  preguntas: PreguntaConfigurada[] = [];
  pregunta: PreguntaConfigurada = { id: 0, clienteId: 'cliente-demo', pregunta: '', respuestas: [{ texto: '' }] };
  respuesta = '';
  editando = false;

  constructor(private configService: ConfigChatService) {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.preguntas = this.configService.obtenerConfiguracion('cliente-demo');
  }

  guardarPregunta(event: Event) {
    event.preventDefault();

    if (!this.pregunta.pregunta.trim() || !this.respuesta.trim()) return;

    if (this.editando) {
      this.pregunta.respuestas[0].texto = this.respuesta;
      this.configService.actualizarPregunta(this.pregunta.id, this.pregunta);
      this.editando = false;
    } else {
      const nuevaPregunta: PreguntaConfigurada = {
        id: Date.now(),
        clienteId: 'cliente-demo',
        pregunta: this.pregunta.pregunta,
        respuestas: [{ texto: this.respuesta }]
      };
      this.configService.agregarPregunta(nuevaPregunta);
    }

    this.limpiarFormulario();
    this.cargarPreguntas();
  }

  editarPregunta(pregunta: PreguntaConfigurada) {
    this.pregunta = { ...pregunta };
    this.respuesta = pregunta.respuestas[0].texto;
    this.editando = true;
  }

  eliminarPregunta(id: number) {
    this.configService.eliminarPregunta(id);
    this.cargarPreguntas();
  }

  limpiarFormulario() {
    this.pregunta = { id: 0, clienteId: 'cliente-demo', pregunta: '', respuestas: [{ texto: '' }] };
    this.respuesta = '';
  }
}
