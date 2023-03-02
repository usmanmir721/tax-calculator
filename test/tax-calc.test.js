var calc = require('../taxCalc.js');


test('testing tax calculation', () => {
  expect(calc('10000')).toBe(0);
  expect(calc('18201')).toBe(0.19);
});