import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuoteDetailComponent } from './home-quote-detail.component';

describe('HomeQuoteDetailComponent', () => {
  let component: HomeQuoteDetailComponent;
  let fixture: ComponentFixture<HomeQuoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeQuoteDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeQuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
