import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSeanceComponent } from './details-seance.component';

describe('DetailsSeanceComponent', () => {
  let component: DetailsSeanceComponent;
  let fixture: ComponentFixture<DetailsSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
