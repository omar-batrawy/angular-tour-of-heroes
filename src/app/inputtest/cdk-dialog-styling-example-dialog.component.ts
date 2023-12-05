import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-cdk-dialog-styling-example-dialog',
  templateUrl: './cdk-dialog-styling-example-dialog.component.html',
  styleUrls: ['./cdk-dialog-styling-example-dialog.component.css'],
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
      }
    `,
  ],
})
export class CdkDialogStylingExampleDialogComponent {
  constructor(public dialogRef: DialogRef) {}
}
