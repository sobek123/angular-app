import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgitComponent } from './testgit.component';

describe('TestgitComponent', () => {
  let component: TestgitComponent;
  let fixture: ComponentFixture<TestgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestgitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
