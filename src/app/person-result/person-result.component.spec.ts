import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonResultComponent } from './person-result.component';

describe('PersonResultComponent', () => {
  let component: PersonResultComponent;
  let fixture: ComponentFixture<PersonResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
