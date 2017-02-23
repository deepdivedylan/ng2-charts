import {NgModule} from "@angular/core";
import {ChartsModule} from "ng2-charts";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {allAppComponents, appRoutingProviders, routing} from "./app.routes";

const moduleDeclarations = [AppComponent];

@NgModule({
	imports:      [BrowserModule, ChartsModule, FormsModule, HttpModule, routing],
	declarations: [...moduleDeclarations, ...allAppComponents],
	bootstrap:    [AppComponent],
	providers:    [appRoutingProviders]
})
export class AppModule {}
