import { TestBed } from '@angular/core/testing';

import { ConfigChatService } from './config-chat.service';

describe('ConfigChatService', () => {
  let service: ConfigChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
