require('core-js/shim')
require('zone.js')

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)
