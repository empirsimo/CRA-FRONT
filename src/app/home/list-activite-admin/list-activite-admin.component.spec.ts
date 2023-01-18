import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiviteAdminComponent } from './list-activite-admin.component';

describe('ListActiviteAdminComponent', () => {
  let component: ListActiviteAdminComponent;
  let fixture: ComponentFixture<ListActiviteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActiviteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiviteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
