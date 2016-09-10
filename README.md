# Dashflux UI

[![License](https://img.shields.io/badge/license-Apache%20v2.0-blue.svg)](LICENSE) [![Join the chat at https://gitter.im/Mainflux/mainflux](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Mainflux/mainflux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Dashboard UI application for Mainflux IoT Platform.

Based on AngularJS 2 and Google Material Design.

### Install
You will need newest [Webpack](https://webpack.github.io/) based [angular-cli](https://github.com/angular/angular-cli/blob/master/WEBPACK_UPDATE.md)
```bash
git clone https://github.com/Mainflux/dashflux
npm install
```

Start the app:
```bash
ng serve
```

### Development
When new Material 2 modules are needed they can be installed like this:
```bash
npm install --save @angular2-material/core @angular2-material/button @angular2-material/card
```

Then all you need to to is to import them in `src/app/app.modules.ts`, and that's all - you can start using these directives in `src/app/app.component.ts`.

List of published modules is here: https://www.npmjs.com/~angular2-material

Eventually all Angular [modules](https://github.com/angular/material2#feature-status) will be supported.

### Documentation
Development documentation can be found on our [Mainflux GitHub Wiki](https://github.com/Mainflux/mainflux/wiki).

### Community
#### Mailing lists
[Mainflux Google Group](https://groups.google.com/forum/#!forum/mainflux)

#### IRC
[Mainflux Gitter](https://gitter.im/Mainflux/mainflux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

#### Twitter
[@mainflux](https://twitter.com/mainflux)

### License
[Apache License, version 2.0](LICENSE)
