import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioListItemComponent } from './radio-list-item.component';

describe('RadioListItemComponent', () => {
  let component: RadioListItemComponent;
  let fixture: ComponentFixture<RadioListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
