import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGeneralComponent } from './view-general.component';

describe('ViewGeneralComponent', () => {
  let component: ViewGeneralComponent;
  let fixture: ComponentFixture<ViewGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ ViewGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
