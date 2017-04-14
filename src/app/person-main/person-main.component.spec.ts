import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMainComponent } from './person-main.component';

describe('PersonMainComponent', () => {
  let component: PersonMainComponent;
  let fixture: ComponentFixture<PersonMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
