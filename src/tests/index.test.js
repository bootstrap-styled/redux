const exported = require('../index');

describe('should export', () => {
  Object.keys(exported).forEach((key) => {
    it(`${key} should be defined`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
});
