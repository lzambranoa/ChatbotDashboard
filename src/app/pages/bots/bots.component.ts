import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bots',
  imports: [CommonModule],
  templateUrl: './bots.component.html',
  styleUrl: './bots.component.scss'
})
export class BotsComponent {

  bots = [
    { id: 1, nombre: 'ChatBot Soporte', estado: 'Activo' },
    { id: 2, nombre: 'Bot Ventas', estado: 'Inactivo' },
  ];

}
