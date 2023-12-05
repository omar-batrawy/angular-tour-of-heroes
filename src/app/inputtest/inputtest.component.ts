import { Component } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.css'],
})
export class InputtestComponent {
  firstNameAutofilled?: boolean;
  lastNameAutofilled?: boolean;

  constructor(public dialog: Dialog) {}

  openDialog(): void {
    this.dialog.open<string>(CdkDialogStylingExampleDialogComponent);
  }

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  consoleLog() {
    console.log('test');
  }
}
@Component({
  selector: 'app-cdk-dialog-styling-example-dialog',
  templateUrl: './cdk-dialog-styling-example-dialog.component.html',
  styleUrls: ['./cdk-dialog-styling-example-dialog.component.css'],
})
export class CdkDialogStylingExampleDialogComponent {
  constructor(public dialogRef: DialogRef) {}
}
