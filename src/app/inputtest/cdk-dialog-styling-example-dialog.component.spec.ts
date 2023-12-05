import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDialogStylingExampleDialogComponent } from './cdk-dialog-styling-example-dialog.component';

describe('CdkDialogStylingExampleDialogComponent', () => {
  let component: CdkDialogStylingExampleDialogComponent;
  let fixture: ComponentFixture<CdkDialogStylingExampleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdkDialogStylingExampleDialogComponent],
    });
    fixture = TestBed.createComponent(CdkDialogStylingExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
