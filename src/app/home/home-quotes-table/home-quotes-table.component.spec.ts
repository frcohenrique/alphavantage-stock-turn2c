import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuotesTableComponent } from './home-quotes-table.component';

describe('HomeQuotesTableComponent', () => {
  let component: HomeQuotesTableComponent;
  let fixture: ComponentFixture<HomeQuotesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeQuotesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeQuotesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
