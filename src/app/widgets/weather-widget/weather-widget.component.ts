import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, Input, TemplateRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [WidgetActions, WidgetState]
})
export class WeatherWidgetComponent {
  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector)

  @Input() headerTemplate!: TemplateRef<any>;

  @Input() contentTemplate!: TemplateRef<WidgetState>;

  @Input() actionTemplate!: TemplateRef<any>;
}
