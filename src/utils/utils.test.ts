import { formatNumber } from '.';

describe('utils unit tests', () => {
  describe('formatNumber unit test', () => {
    it('should format a 3 digits number with commas', () => {
      const formattedNumber = formatNumber(123);
      expect(formattedNumber).toEqual('123');
    });

    it('should format a 7 digits number with commas', () => {
      const formattedNumber = formatNumber(1234567);
      expect(formattedNumber).toEqual('1,234,567');
    });

    it('should format an 8 digits number with commas', () => {
      const formattedNumber = formatNumber(12345678);
      expect(formattedNumber).toEqual('12,345,678');
    });

    it('should format a 9 digits number with commas', () => {
      const formattedNumber = formatNumber(123456789);
      expect(formattedNumber).toEqual('123,456,789');
    });

    it('should format a 9 digits number with dots', () => {
      const formattedNumber = formatNumber(123456789, '.');
      expect(formattedNumber).toEqual('123.456.789');
    });
  });
});
