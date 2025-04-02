import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [WidgetActions, WidgetState]
})
export class WeatherWidgetComponent {
  state = inject(WidgetState);
  actions = inject(WidgetActions);

  @ViewChild('container', { read: ViewContainerRef}) container!: ViewContainerRef;
  @ViewChild('defaultWidgetHeader') headerTemplate!: TemplateRef<any>; 

  ngAfterViewInit(): void {
   this.container.createEmbeddedView(this.headerTemplate);
  }
}
