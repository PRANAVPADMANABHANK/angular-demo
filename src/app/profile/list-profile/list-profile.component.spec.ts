import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfileComponent } from './list-profile.component';

describe('ListProfileComponent', () => {
  let component: ListProfileComponent;
  let fixture: ComponentFixture<ListProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProfileComponent]
    });
    fixture = TestBed.createComponent(ListProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
