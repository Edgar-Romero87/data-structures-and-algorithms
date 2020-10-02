'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('multi bracket validation testing', () => {
  it('returns TRUE with all matching brackets', () => {

    const result = multiBracketValidation('{HI}(THERE)[WORLD]');

    expect(result).toEqual(true);
  });

  it('should return false if there are uneven brackets', () => {
    const result = multiBracketValidation('[({}]');

    expect(result).toEqual(false);
  });
});
