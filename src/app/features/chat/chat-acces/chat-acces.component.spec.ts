import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAccesComponent } from './chat-acces.component';

describe('ChatAccesComponent', () => {
  let component: ChatAccesComponent;
  let fixture: ComponentFixture<ChatAccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatAccesComponent]
    });
    fixture = TestBed.createComponent(ChatAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
