import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccountComponentComponent } from './info-account-component.component';

describe('InfoAccountComponentComponent', () => {
  let component: InfoAccountComponentComponent;
  let fixture: ComponentFixture<InfoAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAccountComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
