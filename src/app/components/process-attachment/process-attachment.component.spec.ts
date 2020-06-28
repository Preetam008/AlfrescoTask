import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAttachmentComponent } from './process-attachment.component';

describe('ProcessAttachmentComponent', () => {
  let component: ProcessAttachmentComponent;
  let fixture: ComponentFixture<ProcessAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
