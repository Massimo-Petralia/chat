import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAccesPageComponent } from './chat-acces-page.component';

describe('ChatPageComponent', () => {
  let component: ChatAccesPageComponent;
  let fixture: ComponentFixture<ChatAccesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatAccesPageComponent]
    });
    fixture = TestBed.createComponent(ChatAccesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
