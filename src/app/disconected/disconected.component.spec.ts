import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconectedComponent } from './disconected.component';

describe('DisconectedComponent', () => {
  let component: DisconectedComponent;
  let fixture: ComponentFixture<DisconectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisconectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisconectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
