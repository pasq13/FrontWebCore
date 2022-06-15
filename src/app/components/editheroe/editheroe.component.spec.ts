import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditheroeComponent } from './editheroe.component';

describe('EditheroeComponent', () => {
  let component: EditheroeComponent;
  let fixture: ComponentFixture<EditheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditheroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
