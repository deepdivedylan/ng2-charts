import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {LineComponent} from "./components/line-component";
import {PieComponent} from "./components/pie-component";

export const allAppComponents = [HomeComponent, LineComponent, PieComponent];

export const routes: Routes = [
	{path: "line", component: LineComponent},
	{path: "pie", component: PieComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
