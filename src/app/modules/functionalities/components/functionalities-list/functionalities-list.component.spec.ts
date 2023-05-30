import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesListComponent } from './functionalities-list.component';

describe('FunctionalitiesListComponent', () => {
  let component: FunctionalitiesListComponent;
  let fixture: ComponentFixture<FunctionalitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionalitiesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FunctionalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
