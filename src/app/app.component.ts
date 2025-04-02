import { Component } from '@angular/core';
import { WeatherCustomActionComponent } from './widgets/weather-custom-action/weather-custom-action.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent, WeatherCustomActionComponent],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .alt-header {
      font-size: 24px;
      font-weight: 300;
      margin-bottom: -6px;
    }
  `]
})
export class AppComponent {
}
