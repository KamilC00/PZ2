import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { LogowanieComponent } from './app/logowanie/logowanie.component';

const bootstrap = () => bootstrapApplication(LogowanieComponent, config);

export default bootstrap;
