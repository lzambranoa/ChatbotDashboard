import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  botsActivos = 8;  // Valores de prueba
  botsInactivos = 3;
  totalBots = this.botsActivos + this.botsInactivos;

  constructor(private router: Router) {}

  irABots() {
    this.router.navigate(['/bots']);
  }

  irAConfig() {
    this.router.navigate(['/config']);
  }
}
