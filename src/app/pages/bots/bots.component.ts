import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bots',
  imports: [CommonModule, FormsModule],
  templateUrl: './bots.component.html',
  styleUrl: './bots.component.scss'
})
export class BotsComponent {

  bots = [
    { id: 1, nombre: 'ChatBot Soporte', estado: 'Activo' },
    { id: 2, nombre: 'Bot Ventas', estado: 'Inactivo' },
  ];

  mostrarFormulario = false;
  botEnEdicion: any = null;
  botFormulario = { id: 0, nombre: '', estado: 'Activo' };

  abrirFormulario (){
    this.botEnEdicion = null;
    this.botFormulario = {id: 0, nombre: '', estado: 'Activo'};
    this.mostrarFormulario = true;
  }

  editarBot(bot: any){
    this.botEnEdicion = bot;
    this.botFormulario = {...bot};
    this.mostrarFormulario = true;
  }

  guardarBot(){
    if(this.botEnEdicion){
      //Actualizar el bot existente
      const index = this.bots.findIndex(b => b.id === this.botEnEdicion.id);
      this.bots[index] = {...this.botFormulario};
    } else {
      //Crear un nuevo Bot
      const nuevoId = this.bots.length ? Math.max(...this.bots.map(b => b.id)) + 1 : 1;
      this.bots.push({...this.botFormulario, id: nuevoId});
    }
    this.cerrarFormulario();
  }

  eliminarBot(id: number){
    this.bots = this.bots.filter(bot => bot.id !== id);
  }

  cerrarFormulario(){
    this.mostrarFormulario = false;
  }

}
