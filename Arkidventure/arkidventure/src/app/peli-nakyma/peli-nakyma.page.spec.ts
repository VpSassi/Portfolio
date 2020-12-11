import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliNakymaPage } from './peli-nakyma.page';

describe('PeliNakymaPage', () => {
  let component: PeliNakymaPage;
  let fixture: ComponentFixture<PeliNakymaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliNakymaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliNakymaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
