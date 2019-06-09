import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	radioModel: string = 'Month';

	public blocoChart1Data: Array<any> = [
		{
			data: [65, 59, 84, 84, 51, 55, 40, 30, 45, 67, 78, 90],
			label: 'Novos Chamados'
		}
	];
	public blocoChart2Data: Array<any> = [
		{
			data: [1, 18, 9, 17, 34, 22, 11, 12, 34, 45, 67, 43],
			label: 'Novos Clientes'
		}
	];
	public blocoChart3Data: Array<any> = [
		{
			data: [78, 81, 80, 45, 39, 37, 40, 43, 65, 80, 76, 56, 45],
			label: 'Novas Empresas'
		}
	];
	public blocoChart4Data: Array<any> = [
		{
			data: [78, 81, 80, 45, 74, 52, 40, 78, 81, 80, 45, 34, 33],
			label: 'Novos Agentes'
		}
	];

	public blocoChartOptions: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				gridLines: {
					color: 'transparent',
					zeroLineColor: 'transparent'
				},
				ticks: {
					fontSize: 2,
					fontColor: 'transparent',
				}

			}],
			yAxes: [{
				display: false
			}],
		},
		elements: {
			line: {
				borderWidth: 1
			},
			point: {
				radius: 4,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		legend: {
			display: false
		}
	};
	public blocoChartColors: Array<any> = [
		{
			backgroundColor: 'transparent',
			borderColor: 'rgba(255,255,255,.55)'
		}
	];
	public blocoChartLegends = false;
	public blocoChartType = 'line';

	public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChart2Options: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				gridLines: {
					color: 'transparent',
					zeroLineColor: 'transparent'
				},
				ticks: {
					fontSize: 2,
					fontColor: 'transparent',
				}

			}],
			yAxes: [{
				display: false,
				ticks: {
					display: false,
					min: 1 - 5,
					max: 34 + 5,
				}
			}],
		},
		elements: {
			line: {
				tension: 0.00001,
				borderWidth: 1
			},
			point: {
				radius: 4,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		legend: {
			display: false
		}
	};
	public lineChart2Colours: Array<any> = [
		{ // grey
			backgroundColor: getStyle('--info'),
			borderColor: 'rgba(255,255,255,.55)'
		}
	];
	public lineChart2Legend = false;
	public lineChart2Type = 'line';


	// lineChart3
	
	public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChart3Options: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				display: false
			}],
			yAxes: [{
				display: false
			}]
		},
		elements: {
			line: {
				borderWidth: 2
			},
			point: {
				radius: 0,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		legend: {
			display: false
		}
	};
	public lineChart3Colours: Array<any> = [
		{
			backgroundColor: 'rgba(255,255,255,.2)',
			borderColor: 'rgba(255,255,255,.55)',
		}
	];
	public lineChart3Legend = false;
	public lineChart3Type = 'line';

	public lineChart4Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
	public lineChart4Options: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				display: false,
				barPercentage: 0.6,
			}],
			yAxes: [{
				display: false
			}]
		},
		legend: {
			display: false
		}
	};
	public lineChart4Colours: Array<any> = [
		{
			backgroundColor: 'rgba(255,255,255,.3)',
			borderWidth: 0
		}
	];
	public lineChart4Legend = false;
	public lineChart4Type = 'line';

	// mainChart

	public mainChartElements = 27;
	public mainChartData1: Array<number> = [];
	public mainChartData2: Array<number> = [];
	public mainChartData3: Array<number> = [];

	public mainChartData: Array<any> = [
		{
			data: this.mainChartData1,
			label: 'Resolvidos'
		},
		{
			data: this.mainChartData2,
			label: 'Abertos'
		}
	];
	/* tslint:disable:max-line-length */
	public mesLabels: Array<any> = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	/* tslint:enable:max-line-length */
	public mainChartOptions: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips,
			intersect: true,
			mode: 'index',
			position: 'nearest',
			callbacks: {
				labelColor: function (tooltipItem, chart) {
					return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				gridLines: {
					drawOnChartArea: false,
				},
				ticks: {
					callback: function (value: any) {
						return value.charAt(0);
					}
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
					max: 250
				}
			}]
		},
		elements: {
			line: {
				borderWidth: 2
			},
			point: {
				radius: 0,
				hitRadius: 10,
				hoverRadius: 4,
				hoverBorderWidth: 3,
			}
		},
		legend: {
			display: true
		}
	};
	public mainChartColours: Array<any> = [
		{ // brandInfo
			backgroundColor: hexToRgba(getStyle('--info'), 10),
			borderColor: getStyle('--info'),
			pointHoverBackgroundColor: '#fff'
		},
		{ // brandSuccess
			backgroundColor: 'transparent',
			borderColor: getStyle('--success'),
			pointHoverBackgroundColor: '#fff'
		},
		{ // brandDanger
			backgroundColor: 'transparent',
			borderColor: getStyle('--danger'),
			pointHoverBackgroundColor: '#fff',
			borderWidth: 1,
			borderDash: [8, 5]
		}
	];
	public mainChartLegend = false;
	public mainChartType = 'line';

	public random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	ngOnInit(): void {
		// generate random values for mainChart
		for (let i = 0; i <= this.mainChartElements; i++) {
			this.mainChartData1.push(this.random(50, 200));
			this.mainChartData2.push(this.random(80, 100));
			this.mainChartData3.push(65);
		}
	}
}
