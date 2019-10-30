import { TestBed, async, inject } from '@angular/core/testing';

import { LoginAuth1Guard } from './login-auth1.guard';

describe('LoginAuth1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuth1Guard]
    });
  });

  it('should ...', inject([LoginAuth1Guard], (guard: LoginAuth1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
