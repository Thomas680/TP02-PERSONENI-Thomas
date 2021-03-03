import { InternationalPhoneNumberPipe } from './international-phone-number.pipe';

describe('InternationalPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new InternationalPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
