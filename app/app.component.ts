import { Component } from '@angular/core';
import {
  Resource,
  SchedulerEvent,
  SchedulerModelFields,
} from '@progress/kendo-angular-scheduler';
import { sampleDataWithResources, displayDate } from './events-utc';
import { resources } from './resources';

@Component({
  selector: 'my-app',
  template: `
        <kendo-scheduler [kendoSchedulerBinding]="events" [resources]="resources" [selectedDate]="selectedDate">
            <ng-template kendoSchedulerEventTemplate let-event="event" let-resources="resources">
                <div>{{ event.title }}</div>
                <div>{{ resources | json }}</div>
            </ng-template>
            <kendo-scheduler-week-view>
            </kendo-scheduler-week-view>
            <div></div>
        </kendo-scheduler>
    `,
})
export class AppComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleDataWithResources;
  public resources: Resource[] = resources;
}
