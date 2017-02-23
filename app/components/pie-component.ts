import {Component} from "@angular/core";

@Component({
	templateUrl: "./templates/pie.php"
})

export class PieComponent {
	// fake pie data
	public pieChartLabels: string[] = ["Hillary Clinton", "Donald Trump", "Gary Johnson", "Jill Stein"];
	public pieChartColors: any[] = [{}]; // HACK: https://github.com/valor-software/ng2-charts/issues/251#issuecomment-225581645
	public pieChartDatasets: any[] = [
		{
			data: [1987416, 1981209, 52176, 19108],
			backgroundColor: ["#86c7f3", "#ffa1b5", "#ffe29a", "#93d9d9"]
		}
	];
	public pieChartType: string = "pie";
}
