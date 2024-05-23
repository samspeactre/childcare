/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

