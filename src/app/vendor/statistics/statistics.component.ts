import { Component, OnInit } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
  }

  // lineChart
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;

  // areaChart
  public areaChartData = chartsData.areaChartData;
  public areaChartLabels = chartsData.areaChartLabels;
  public areaChartOptions = chartsData.areaChartOptions;
  public areaChartColors = chartsData.areaChartColors;
  public areaChartLegend = chartsData.areaChartLegend;
  public areaChartType = chartsData.areaChartType;

  // scatterChart
  public scatterChartData = chartsData.scatterChartData;
  public scatterChartLabels = chartsData.scatterChartLabels;
  public scatterChartOptions = chartsData.scatterChartOptions;
  public scatterChartColors = chartsData.scatterChartColors;
  public scatterChartLegend = chartsData.scatterChartLegend;
  public scatterChartType = chartsData.scatterChartType;

  // barChart
  public barChartOptions = chartsData.barChartOptions;
  public barChartLabels = chartsData.barChartLabels;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = chartsData.barChartData;
  public barChartColors = chartsData.barChartColors;

  // Doughnut
  public doughnutChartLabels = chartsData.doughnutChartLabels;
  public doughnutChartData = chartsData.doughnutChartData;
  public doughnutChartType = chartsData.doughnutChartType;
  public doughnutChartColors = chartsData.doughnutChartColors;
  public doughnutChartOptions = chartsData.doughnutChartOptions;

  // Radar
  public radarChartLabels = chartsData.radarChartLabels;

  public radarChartData = chartsData.radarChartData;
  public radarChartType = chartsData.radarChartType;
  public radarChartColors = chartsData.radarChartColors;
  public radarChartOptions = chartsData.radarChartOptions;


  // Pie
  public pieChartLabels = chartsData.pieChartLabels;
  public pieChartData = chartsData.pieChartData;
  public pieChartType = chartsData.pieChartType;
  public pieChartColors = chartsData.pieChartColors;
  public pieChartOptions = chartsData.pieChartOptions;

  // PolarArea
  public polarAreaChartLabels = chartsData.polarAreaChartLabels;
  public polarAreaChartData = chartsData.polarAreaChartData;
  public polarAreaLegend = chartsData.polarAreaLegend;
  public ploarChartColors = chartsData.ploarChartColors;
  public polarAreaChartType = chartsData.polarAreaChartType;
  public polarChartOptions = chartsData.polarChartOptions;

  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

}
