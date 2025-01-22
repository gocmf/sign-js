import md5 from 'crypto-js/md5';

const sign = require('../dist/index');

describe('sign.generate', () => {
    it('should return an empty string when params is null', () => {
        expect(sign.generate(null, 'secretKey', 123456)).toBe('');
    });

    it('should return an empty string when params is undefined', () => {
        expect(sign.generate(undefined, 'secretKey', 123456)).toBe('');
    });

    it('should return an empty string when params is an empty object', () => {
        expect(sign.generate({}, 'secretKey', 123456)).toBe('');
    });

    it('should filter out null and empty string values in params', () => {
        const params = { a: null, b: '', c: 'value' };
        const expectedSignature = md5('c=value&secretKey=secretKey&timestamp=123456').toString();
        expect(sign.generate(params, 'secretKey', 123456)).toBe(expectedSignature);
    });

    it('should generate a correct signature with valid params', () => {
        const params = { b: 'value2', a: 'value1' };
        const expectedSignature = md5('a=value1&b=value2&secretKey=secretKey&timestamp=123456').toString();
        expect(sign.generate(params, 'secretKey', 123456)).toBe(expectedSignature);
    });

    it('should handle special characters and spaces in params', () => {
        const params = { key: 'value with spaces & special chars!' };
        const expectedSignature = md5('key=value with spaces & special chars!&secretKey=secretKey&timestamp=123456').toString();
        expect(sign.generate(params, 'secretKey', 123456)).toBe(expectedSignature);
    });
});
