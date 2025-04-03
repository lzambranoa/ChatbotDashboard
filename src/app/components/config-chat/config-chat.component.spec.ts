import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChatComponent } from './config-chat.component';

describe('ConfigChatComponent', () => {
  let component: ConfigChatComponent;
  let fixture: ComponentFixture<ConfigChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
