import {Component} from "@angular/core";

@Component({
	templateUrl: "./templates/pie.php"
})

export class PieComponent {
	// fake pie data
	public pieChartLabels:string[] = ["Hillary Clinton", "Donald Trump", "Gary Johnson", "Jill Stein"];
	public pieChartData:number[] = [1987416, 1981209, 52176, 19108];
	public pieChartType:string = "pie";	
}
