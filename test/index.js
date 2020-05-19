var expect = require('chai').expect;
var index = require('../index');

describe('All tests', () => {
  describe('initial tests', () => {
  	it('should return "Hello world!"', () => {
  		const s = index();

  		expect(s).to.equal('Hello world!');
  	})
  });
});
