# Salonhome

Preparation:
Install node.js 10.x
Run as administrator in cmd.exe:
 npm install -g  production windows-build-tools
 (This installs VCBuild.exe and Python 2.7)

If other versions of angular are installed, then uninstall. The previous global angular may cause issues. 
npm un @angular/cli -g --save
npm -g install @angular/cli

Then in project directory:
npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Note: If you get an error about angular-devkit/core not being installed, from project directory, do following:
npm install @angular-devkit/core@latest

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
