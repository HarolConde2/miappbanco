import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, BrowserDynamicTestingModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loginApp', () => {
    expect(component).toBeTruthy();
  });
  it('registerLink', () => {
    expect(component)
  })
});
