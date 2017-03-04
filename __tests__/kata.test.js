/* eslint-disable fp/no-unused-expression, better/explicit-return */

import kata from '../src/kata';

describe('kata', () => {
  test('should do kata', () => {
    expect(kata('value')).toBe('Toto');
  });
});
