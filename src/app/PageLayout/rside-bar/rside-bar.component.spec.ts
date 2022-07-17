import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsideBarComponent } from './rside-bar.component';

describe('RsideBarComponent', () => {
  let component: RsideBarComponent;
  let fixture: ComponentFixture<RsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
