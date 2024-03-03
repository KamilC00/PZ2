import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LogowanieComponent } from './app/logowanie/logowanie.component';

bootstrapApplication(LogowanieComponent, appConfig)
  .catch((err) => console.error(err));
