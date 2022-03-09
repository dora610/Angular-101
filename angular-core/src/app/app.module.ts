import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card.component";

@NgModule({
    declarations:[AppComponent, CardComponent], // declare all of the components
    imports:[BrowserModule],
    bootstrap:[AppComponent],
    providers:[]
})
export class AppModule{}