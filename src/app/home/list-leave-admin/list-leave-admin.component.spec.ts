import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeaveAdminComponent } from './list-leave-admin.component';

describe('ListLeaveAdminComponent', () => {
  let component: ListLeaveAdminComponent;
  let fixture: ComponentFixture<ListLeaveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLeaveAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeaveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
