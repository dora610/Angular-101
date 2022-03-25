# Travelgram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Package Installation

### Add firebase to angular:

- run
```
ng add @angular/fire
```
- insert firebase config inside environment.ts file

Module import
```
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
```


### NGX-Toastr
```
npm install ngx-toastr --save
npm install @angular/animations --save
```
- inside style.css
```
@import '~ngx-toastr/toastr';
```
@NgModule
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
```
```
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
```

### Fortawesome/angular-fontawesome

```
$ ng add @fortawesome/angular-fontawesome@0.10.1
```

1) Module import
```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
...
@NgModule({
  imports: [
    ...
    FontAwesomeModule
  ],
})
```
2) Component import
```
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export class AppComponent {
  faCoffee = faCoffee;
}

<fa-icon [icon]="faCoffee"></fa-icon>
```

### Other packages:-

 - bootstrap
 - firebase
 - uuid
 - browser-image-resizer
```
npm i bootstrap firebase uuid browser-image-resizer
```