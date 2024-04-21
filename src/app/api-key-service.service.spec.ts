import { TestBed } from '@angular/core/testing';

import { ApiKeyServiceService } from './api-key-service.service';

describe('ApiKeyServiceService', () => {
  let service: ApiKeyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKeyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the api key if present', () => {
    service.apikey = 'test'
    expect(service.getApiKey()).toBe('test')
  });

  it('should return key from prompt if key not present', () => {
    service.apikey = ''
    spyOn(window, "prompt").and.returnValue("prompt-key")
    expect(service.getApiKey()).toBe('prompt-key')
  });



});
