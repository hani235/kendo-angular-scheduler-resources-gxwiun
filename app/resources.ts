import { Resource } from '@progress/kendo-angular-scheduler';

export const resources: Resource[] = [
  {
    "colorField": "color",
    "data": [
      {
        "color": "#ff9800",
        "text": "In progress",
        "value": "0"
      },
      {
        "color": "#4caf50",
        "text": "Available",
        "value": "1"
      },
      {
        "color": "#eeeeee",
        "text": "Canceled",
        "value": "2"
      }
    ],
    "field": "status",
    "multiple": false,
    "name": "Statut",
    "textField": "text",
    "valueField": "value"
  },
  {
    "colorField": "color",
    "data": [
      {
        "color": "#9e9e9e",
        "text": "Private",
        "value": "private"
      },
      {
        "color": "#ef6c00",
        "text": "Public",
        "value": "public"
      }
    ],
    "field": "source",
    "multiple": false,
    "name": "Source",
    "textField": "text",
    "valueField": "value"
  }
];
