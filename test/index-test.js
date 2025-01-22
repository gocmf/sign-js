'use strict';
const expect = require('chai').expect;
const generate = require('../dist/index').generate;

describe('generate function test', () => {
    it('should return 2', () => {
        const params = {
            name: 'gouguoyin',
            age: 18,
            sex: ''
        }
        const secretKey = 'gocmf'
        const timestamp = '1737538142'
        const sign = generate(params, secretKey,timestamp);
        expect(sign).to.equal(2);
    });
});