import { ChangeDetectionStrategy, AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';
import { ChatComponent } from '../../components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, SlidersIcon } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [ChatComponent, CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('botChart', { static: false }) botChartCanvas!: ElementRef;
  @ViewChild('growthChart', { static: false }) growthChartCanvas!: ElementRef;


  readonly SliderIcon = SlidersIcon;

  botsActivos = 10;  // Datos de prueba
  botsInactivos = 5;
  totalBots = this.botsActivos + this.botsInactivos;
  mostrarChat = false;

  botChart: any;
  growthChart: any;

  constructor(private router: Router) {}

  toggleChat() {
    console.log("Mostrar Chat")
    this.mostrarChat = !this.mostrarChat;
  }

  ngAfterViewInit() {
    this.initBotChart();
    this.initGrowthChart();
  }

  initBotChart() {
    if (this.botChart) {
      this.botChart.destroy();
    }

    const canvas = this.botChartCanvas?.nativeElement;
    if (!canvas) return;

    this.botChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Activos', 'Inactivos'],
        datasets: [{
          data: [this.botsActivos, this.botsInactivos],
          backgroundColor: ['#4CAF50', '#FF5252'],
        }]
      },
    });
  }

  initGrowthChart() {
    if (this.growthChart) {
      this.growthChart.destroy();
    }

    const canvas = this.growthChartCanvas?.nativeElement;
    if (!canvas) return;

    this.growthChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
          label: 'Crecimiento de Bots',
          data: [5, 10, 15, 20],
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true
        }]
      }
    });
  }

  irABots() {
    this.router.navigate(['/bots']);
  }

  irAConfig() {
    this.router.navigate(['/config']);
  }
}
