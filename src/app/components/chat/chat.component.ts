import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  imports: [NgClass, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  mensajes: { texto: string, tipo: 'usuario' | 'bot'}[] = [];
  mensaje = '';

  constructor(private chatService: ChatService, private cdRef: ChangeDetectorRef) {}

  
  enviarMensaje() {
    if (!this.mensaje.trim()) return;
  
    // Agregar mensaje del usuario
    this.mensajes.push({ texto: this.mensaje, tipo: 'usuario' });
  
    // Obtener respuesta del servicio y esperar el resultado
    const mensajeUsuario = this.mensaje;
    this.mensaje = ''; // Limpiar input antes de la respuesta
  
    setTimeout(() => {
      const respuesta = this.chatService.obtenerRespuesta(mensajeUsuario);
      this.mensajes.push({ texto: respuesta, tipo: 'bot' });

      // Forzar actualización de la vista
      this.cdRef.detectChanges();
    }, 500);
  }

  cerrarChat() {
    //Reinicia los mensajes al cerrar
    this.mensajes = [];
  }

  

}
